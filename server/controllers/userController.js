import aysncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import bcryptjs from 'bcryptjs'
import {generateToken} from '../utils/generateToken.js'

import Admin from '../models/adminModel.js'
import cloudinary from 'cloudinary'



const authUser = aysncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })
    if (user && await bcryptjs.compare(password, user.password)) {
        generateToken(res, user._id)
        res.status(201).json({
            message: "LOgeed in Suceessfully",
            _id: user._id,
            name: user.name,
            email: user.email,
            profileimage:user.profileimage

        })
    } else {
        res.status(401);
        throw new Error('Ivalid Credentials')
    }

})


const registerUser = aysncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const UserExists = await User.findOne({ email: email })

        if (UserExists) {
            return res.status(400).json({ message: "USER ALREADY EXISTS" })
        }
        else {
            //password hashing

            const salt = await bcryptjs.genSalt(10)
            const hashedPassword = await bcryptjs.hash(password, salt)

            const newUser = User({
                name,
                email,
                password: hashedPassword,
            })
            const resUser = await newUser.save()

            if (resUser) {
                generateToken(res, newUser._id)
                return res.status(200).json({ message: "registered successfully" })

            }

        }

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }



})


const logoutUser = aysncHandler(async (req, res) => {

    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({ message: "LOGOUT USER" })
})


const getuserProfile = aysncHandler(async (req, res) => {

    const user = {
        _id: req.user._id,
        name: req.user.name,
        emai: req.user.email,

    }
    res.status(200).json(user)
})

const updateUserProfile = aysncHandler(async (req, res) => {

try {
    const user = await User.findById(req.user._id)


    if(req.body.profileimage)
    {
        const image=req.body.profileimage
        const uploadResponse = await cloudinary.v2.uploader.upload(image) 
        user.profileimage=uploadResponse.url;
    }

    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email

        if (req.body.password) {
            const salt = await bcryptjs.genSalt(10)
            const hashedPass = await bcryptjs.hash(req.body.password, salt)
            user.password = hashedPass

        }
        



        const updatedUser = await user.save()
        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            profileimage:updatedUser.profileimage

        })
    } else {
        res.status(404)
        throw new Error('user not found'
        )
    }

    res.status(200).json({ message: "update user prifle user" })
} catch (error) {
    console.log(error.message)
}    

  
})




const adminLogin = aysncHandler(async (req, res) => {
    console.log("Request Body:", req.body);


    const { email, password } = req.body;
try {
    const admin=await Admin.findOne({email})
    if(admin)
    {
        if(password==admin.password)
        {
            generateToken(res,admin.email)
            res.status(200).json({message:'hhddjjfgshiv f edsk fs'})
        }
    }
} catch (error) {
    
}
  
})




export {
    authUser,
    registerUser,
    logoutUser,
    getuserProfile,
    updateUserProfile,
    adminLogin,
  
   
   
}