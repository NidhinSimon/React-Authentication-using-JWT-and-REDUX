import express from 'express'
import { adminLogin,logout,addUser ,allUser,getUser,editUser,deleteUser} from '../controllers/adminController.js';
import cookieParser from "cookie-parser";
import protectadmin from '../middleware/adminMiddleware.js'


const router = express.Router()

router.use(cookieParser());


router.get('/all',allUser)
router.get('/:id',protectadmin,getUser)

router.put('/:id',protectadmin,editUser)
router.delete('/:id',protectadmin,deleteUser)


router.post('/adminlogin',adminLogin)
router.post('/logout',logout)

router.post('/add',protectadmin,addUser)






export default router