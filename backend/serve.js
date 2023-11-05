import express from "express";
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routes/UserRouter.js';


import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import cors from 'cors';

dotenv.config();
connectDB();
const port = process.env.PORT || 300
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('Server ready'))

app.use('/api/user', userRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server start port ${port}`))