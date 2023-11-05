import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const MessageSchema = mongoose.Schema(
    {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

        recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        text: String,
        file: String,
    },
    {
        timestamps: true,

    }

);

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password using bcrypt

const Message = mongoose.model('messages', MessageSchema);

export default Message;