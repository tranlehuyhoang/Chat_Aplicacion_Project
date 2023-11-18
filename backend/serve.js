import express from 'express';
import User from './models/UserModel.js';
import Message from './models/MessageModel.js';

import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routes/UserRouter.js';
import messageRouter from './routes/MessageRouter.js';
import { WebSocketServer } from 'ws';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cors from 'cors';
import jwt from 'jsonwebtoken';

import fs from 'fs'


dotenv.config();
connectDB();
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./uploads'));
app.get('/', (req, res) => res.send('Server ready'));
app.use('/api/user', userRouter);
app.use('/api/message', messageRouter);
app.use(notFound);
app.use(errorHandler);
const server = app.listen(port, () => console.log(`Server running on port ${port}`));
const wss = new WebSocketServer({ server, clientTracking: true, perMessageDeflate: false });

async function sendStatusUsers() {
    const users = await User.find();
    const onlineUsers = [...wss.clients]
    const usersStatus = users.map(user => {
        const status = onlineUsers.some(client => user._id.toString() === client.userId)
        return { user, status };
    });
    // console.log('usersStatus', usersStatus);
    [...wss.clients]
        .forEach(c => c.send(JSON.stringify({ usersStatus: usersStatus })));

}

wss.on('connection', async (connection, req) => {
    const cookies = req.headers.cookie;
    if (!cookies) {
        return;
    }
    const cookiePairs = cookies.split(';');
    let jwtValue = null;
    for (const pair of cookiePairs) {
        const [name, value] = pair.trim().split('=');
        if (name === 'jwt') {
            jwtValue = value;
            break;
        }
    }
    if (jwtValue) {
        try {
            const decoded = jwt.verify(jwtValue, process.env.JWT_SECRET);
            const user = await User.findOne({ _id: decoded.userId });
            connection.userId = decoded.userId;
            connection.user = user;
        } catch (error) {
            connection.send(error.message);
        }
    } else {
        connection.send('Not authorized, no token');
        connection.close();
    }

    sendStatusUsers();

    connection.on('message', async (message) => {
        const messageData = JSON.parse(message.toString());
        const { recipient, text, file } = messageData;
        let messageDoc;
        let filename = null;
        if (file) {
            const parts = file.name.split('.');
            const ext = parts[parts.length - 1];
            filename = Date.now() + '.' + ext;
            const path = './uploads/' + filename;
            const bufferData = Buffer.from(file.data.split(',')[1], 'base64');
            fs.writeFile(path, bufferData, () => {
            });
        }
        if (recipient && (text || file)) {
            messageDoc = await Message.create({
                sender: connection.userId,
                recipient,
                text,
                file: file ? filename : null,
            });
        }

        [...wss.clients]
            .filter(c => c.userId === recipient)
            .forEach(c => c.send(JSON.stringify({
                text,
                sender: connection.userId,
                recipient,
                file: file ? filename : null,
                _id: messageDoc ? messageDoc._id : null, // Assign messageDoc._id if it exists, otherwise null
            })));
    });
    connection.on('close', () => {
        sendStatusUsers();
    });
});