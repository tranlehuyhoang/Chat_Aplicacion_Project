import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routes/UserRouter.js';
import { WebSocketServer } from 'ws';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cors from 'cors';
import jwt from 'jsonwebtoken';

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

app.use(notFound);
app.use(errorHandler);

const server = app.listen(port, () => console.log(`Server running on port ${port}`));

const wss = new WebSocketServer({ server, clientTracking: true, perMessageDeflate: false });

wss.on('connection', (connection, req) => {
    const cookies = req.headers.cookie;
    if (!cookies) {
        return
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

    [...wss.clients].forEach(client => {
        client.send(JSON.stringify({
            online: [...wss.clients].map(c => ({ userId: c.userId, userName: c.userName })),
        }));
    });

});