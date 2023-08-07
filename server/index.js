import express from "express";
import dotenv from 'dotenv'
import userRoutes from './routes/userRoute.js'
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import adminRoutes from './routes/adminRoute.js'
import cors from 'cors'
import cloudinary from 'cloudinary'


connectDB()

dotenv.config()
const port = process.env.PORT || 5000;

const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true,limit:'500mb'}))
app.use(cookieParser())
app.use(cors())


// cloudinary.v2.config({
//     cloud_name:"dj8z6xx94",
//     api_key:'215584545747347',
//     api_secret: "3FPTZutia3Qu1cxCVRT7YcuJaBwY",
//   });

cloudinary.v2.config({
    cloud_name:"duhvcmhss",
    api_key:'441944377857495',
    api_secret: "g09PfHjDob_Awh735owiVRyHtsY",
  });



app.use('/api/users',userRoutes)
app.use('/admin',adminRoutes)

app.get('/',(req,res)=>res.send("server is ready"))

app.use(notFound)
app.use(errorHandler)




app.listen(port,()=>console.log(`Server Started on http://localhost:${port}/`))