import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routes/UserRouter.js';
import messageRouter from './routes/MessageRouter.js';
import { WebSocketServer } from 'ws';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import Message from './models/MessageModel.js'

dotenv.config();
connectDB();
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('Server ready'));

app.use('/api/user', userRouter);
app.use('/api/message', messageRouter);

app.use(notFound);
app.use(errorHandler);

const server = app.listen(port, () => console.log(`Server running on port ${port}`));
const wss = new WebSocketServer({ server, clientTracking: true, perMessageDeflate: false });

function sendOnlineUsersUpdate() {
    const onlineUsers = [...wss.clients].map(client => ({ userId: client.userId, userName: client.userName }));

    [...wss.clients].forEach(client => {
        client.send(JSON.stringify({ online: onlineUsers }));
    });
}

wss.on('connection', (connection, req) => {
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
            connection.userId = decoded.userId;
            connection.userName = decoded.userName;
            const jsonData = JSON.stringify(decoded);
            connection.send(jsonData);
        } catch (error) {
            // Token verification failed
            connection.send(error.message);
        }
    } else {
        // No token provided
        connection.send('Not authorized, no token');
        connection.close();
    }

    sendOnlineUsersUpdate();
    connection.on('message', async (message) => {
        const messageData = JSON.parse(message.toString());
        const { recipient, text, file } = messageData;
        console.log({ recipient, text, file });
        let messageDoc; // Declare messageDoc variable outside the if block

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
        sendOnlineUsersUpdate();
    });
});