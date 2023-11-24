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
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
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
    // console.log(cookies)
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
        // console.log(messageData)
        if (messageData.avatar) {
            sendStatusUsers();

        } else {
            const { text, sender, recipient, _id, file, filename, image, size } = messageData;
            console.log('send image')
            let messageDoc;
            let image_name = null

            if (image) {

                const parts = filename.split('.');
                const ext = parts[parts.length - 1];
                image_name = Date.now() + '.' + ext;
                const path = './uploads/' + image_name;
                const bufferData = Buffer.from(image.split(',')[1], 'base64');
                fs.writeFile(path, bufferData, () => {
                });
            }

            try {
                // console.log(sender.user._id)
                // console.log(recipient.user._id)
                messageDoc = await Message.create({
                    text,
                    senderId: sender.user._id,
                    sender: sender.user,
                    recipientId: recipient.user._id,
                    recipient: recipient.user,
                    file: file ? file : null,
                    filename: filename ? filename : null,
                    image: image_name ? image_name : null,
                    size: size ? size : null
                });
                // console.log(messageDoc)
            } catch (error) {
                console.log(error)
            }


            console.log({
                text,
                sender: sender.user,
                recipient: recipient.user,
                _id: messageDoc ? messageDoc.createdAt : null,
                file: file ? file : null,
                filename: filename ? filename : null,
                image: image_name ? image_name : null,
                size: size ? size : null,


            });
            [...wss.clients]
                .filter(c => c.userId === recipient.user._id)
                .forEach(c => c.send(JSON.stringify({
                    text,
                    sender: sender.user,
                    recipient: recipient.user,
                    _id: messageDoc ? messageDoc.createdAt : null,
                    file: file ? file : null,
                    filename: filename ? filename : null,
                    image: image_name ? image_name : null,
                    size: size ? size : null,


                })));
            sendStatusUsers();
        }


    });
    connection.on('close', () => {
        sendStatusUsers();
    });
});