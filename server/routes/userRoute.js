import express from 'express'
import protect from '../middleware/authMiddleware.js'
import cookieParser from "cookie-parser";
import {
    authUser, registerUser,
    logoutUser,
    getuserProfile,
    updateUserProfile,
    adminLogin
} from '../controllers/userController.js'


const router = express.Router()

router.use(cookieParser());


router.post('/auth', authUser)

router.post('/register', registerUser)
router.post('/logout', logoutUser)
router.route('/profile').get(protect,getuserProfile).put(protect,updateUserProfile)
router.post('/adminlogin',adminLogin)


export default router