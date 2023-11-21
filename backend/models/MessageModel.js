import bcrypt from 'bcryptjs';
import User from './UserModel.js';
import mongoose, { Schema } from 'mongoose';

const MessageSchema = mongoose.Schema(
    {
        senderId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },

        recipientId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        sender: {
            type: Object
        },

        recipient: {
            type: Object
        },
        text: String,
        file: String,
        filename: String,
        image: String,
        size: String,

    },
    {
        timestamps: true,

    }

);

// Match user entered password to hashed password in database

// Encrypt password using bcrypt

const Message = mongoose.model('messages', MessageSchema);

export default Message;