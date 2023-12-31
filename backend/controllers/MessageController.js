import asyncHandler from 'express-async-handler';
import Message from '../models/MessageModel.js';
import generateToken from '../utils/generateToken.js';
import User from '../models/UserModel.js';

const getMessage = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    const userData = req.user._id;
    const ourUserId = userData;

    const messages = await Message.find({
        $or: [
            { senderId: userId, recipientId: ourUserId },
            { senderId: ourUserId, recipientId: userId }
        ]
    })
        .sort({ createdAt: 1 })
        ;

    res.status(200).json(messages);
});

export {
    getMessage
};