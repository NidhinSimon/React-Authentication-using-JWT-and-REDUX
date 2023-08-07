import mongoose from "mongoose";




const adminSchema = mongoose.Schema({
 
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String
    }
})

const Admin=mongoose.model('Admin',adminSchema)

export default Admin