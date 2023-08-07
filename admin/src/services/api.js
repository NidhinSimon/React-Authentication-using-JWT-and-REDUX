import axios from 'axios';

 

const URL='http://localhost:5000/admin'

export const addUserdetails= async(data)=>{

    try {
     return  await axios.post(`${URL}/add`,data)
    } catch (error) {
   console.log(error)
    }


}

export const getUsers=async(req,res)=>{
    console.log('dddd')
    try {
       return await axios.get(`${URL}/all`)
    } catch (error) {
        console.log("eroorr in catch ilek keri",error)
        
    }
  
}

export const getUser=async(id)=>{
    
    try {
        
    return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.error('erro while calling the user get api:', error);
        throw error;
        
    }
  
}

export const editUser=async(user,id)=>{
    try {
        return await axios.put(`${URL}/${id}`,user)
    } catch (error) {
        console.log('error',error)
    }
}


export const deleteUser=async(id)=>{
    try {
        return await axios.delete(`${URL}/${id}`)
    } catch (error) {
        console.log('errorororoorororor')
    }
}

