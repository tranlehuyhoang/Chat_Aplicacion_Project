import asyncHandler from 'express-async-handler';


import generateToken from '../utils/generateToken.js';
import User from '../models/UserModel.js';

const registerUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)

    const userExists = await User.findOne({ username });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const createdUser = await User.create({
        username: username,
        password: password,
    });
    if (createdUser) {
        const token = generateToken(res, createdUser._id, createdUser.username);
        res.status(201).json({

            user: createdUser,
            token: token
        });

    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }

});
const authUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
        const passOk = await user.matchPassword(password);
        if (passOk) {

            const token = generateToken(res, user._id, user.username);
            res.json({
                user: user,
                token: token
            });
        } else {
            throw new Error('sai tk hoac mat khau ');

        }
    } else {
        throw new Error('khoong tồn tại ');

    }
});


const getProfileUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    res.json({ user });


})


const getAllUser = asyncHandler(async (req, res) => {
    const users = await User.find();
    const userArray = users.map(user => ({
        user: user,
        status: false
    }));

    res.status(200).json(userArray);
    // console.log('users', userArray);
});
export {
    registerUser, authUser, getProfileUser, getAllUser
}