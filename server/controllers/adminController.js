import aysncHandler from 'express-async-handler'

import User from '../models/userModel.js'
import bcryptjs from 'bcryptjs'
import { generateadminToken } from '../utils/generateToken.js'
import { generateToken } from '../utils/generateToken.js'

import Admin from '../models/adminModel.js'






const adminLogin = aysncHandler(async (req, res) => {

    const { email, password } = req.body

    const admin = await Admin.findOne({ email })
    console.log("><<<<<admin<<<<<<<", admin)
    if (admin && await password === admin.password) {
        generateadminToken(res, admin._id)
        res.status(201).json({
            message: "LOgeed in Suceessfully",
            _id: admin._id,

            email: admin.email,
            name: admin.name,

        })

    } else {
        res.status(401);
        throw new Error('Ivalid Credentials')
    }

})


const logout = aysncHandler(async (req, res) => {
    res.cookie('admintoken', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({ message: "admin loggged out" })
})

const addUser = aysncHandler(async (req, res) => {

    const user = req.body;
    console.log(user)
    

    const newUser = new User(user)

    

    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }


    res.status(200).json({ message: "jdhghfghfgdhgfhgfdhgfdhdgfhgdhgdf" })
})



const allUser = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {


    }
}

const getUser = async (req, res) => {

    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)

    } catch (error) {
        res.status(404)

    }

}

const editUser = async (req, res) => {
    let user = req.body
    const editUser = new User(user)

    try {
        await User.updateOne({ _id: req.params.id }, editUser)
        res.status(201).json(editUser)

    } catch (error) {
        res.status(409)
    }
}
const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id })
        res.status(200).json({ message: "user delete sucessfully" })
    } catch (error) {
        res.status(400).json({ message: "djgdjgdjhjd" })

    }
}





export {
    adminLogin, logout, addUser, allUser, getUser, editUser, deleteUser
}