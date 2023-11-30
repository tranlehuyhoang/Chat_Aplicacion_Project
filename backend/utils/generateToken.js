import jwt from 'jsonwebtoken';

const generateToken = (res, userId, userName) => {
    const token = jwt.sign({ userId, userName }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    res.cookie('jwt', token, {
        httpOnly: false,
        secure: false, // Allow access from both HTTP and HTTPS
        sameSite: 'strict', // Prevent CSRF attacks
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    return token;
};

export default generateToken;