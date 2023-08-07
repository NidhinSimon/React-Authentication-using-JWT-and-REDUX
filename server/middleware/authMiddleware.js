import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'



const protect =asyncHandler( async (req, res, next) => {
    console.log("j");
    const token = req.cookies.jwt;
    console.log(token,"tokennnn");


    if (token) {
        try {
            const decode = jwt.verify(token,process.env.JWT_SECRET)
            req.user = await User.findById(decode.userId).select('-password');
            next()

        } catch (error) {
            res.status(401);
            throw new Error('Not authorized')

        }

    } else {
        res.status(401);
        throw new Error('Not authorizes , no token')
    }
})






export default protect 