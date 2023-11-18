import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const MessageSchema = mongoose.Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

        recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        text: String,
        file: String,
        filename: String,
        image: String,
    },
    {
        timestamps: true,

    }

);

// Match user entered password to hashed password in database

// Encrypt password using bcrypt

const Message = mongoose.model('messages', MessageSchema);

export default Message;