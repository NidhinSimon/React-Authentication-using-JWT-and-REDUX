import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { useNavigate, } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {toast} from 'react-toastify'
import { useUpdateUserMutation } from "../slices/usersApiSlice";
import {
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import FormContainer from "../components/FormContainer";

import React from "react";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [previewImage, setPreviewImage] = useState('');
  const [profileimage,setProfileImage]=useState('')



  const {userInfo} = useSelector((state)=>state.auth)
  const [updateUser]=useUpdateUserMutation()
console.log(userInfo,'...............')
  useEffect(()=>{

    if(userInfo)
    {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setProfileImage(userInfo.profileimage || '');
      setPreviewImage(userInfo.profileimage || '')
    }

  },[userInfo])



  const dispatch=useDispatch()
  const navigate=useNavigate()


  const handleFileChange = (e) => {
    const { files } = e.target;
    const file = files[0];
    previewFile(file);
  };
  
  function previewFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result;
      setPreviewImage(result);
      setProfileImage(result); 
    };
  }


  


  const handleSubmit = async(e) => {
    e.preventDefault();
    if(password!==confirmPassword)

    {
      toast.error('Password and Confirm Password does not Match')
    }else
    {
    try {
     
        const res=await updateUser({_id:userInfo._id,name,email,password,profileimage}).unwrap()
       console.log(res,'res')

     dispatch(setCredentials({...res}))
    toast.success("Profile Updated successfully")
    } catch (err) {
        toast.error(err?.data?.message || err.error)
    }
    }

  };

  return (
    <FormContainer>
        <h1>Update Profile</h1>
      <Form onSubmit={handleSubmit}>

      <FormGroup className="my-2" controlId="image">
          <FormLabel>PROFILE PHOTO</FormLabel>
          {profileimage && (
            <img
              src={profileimage}
              alt="Profile"
              style={{ maxWidth: "150px", marginBottom: "10px" }}
            />
          )}
          <FormControl
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </FormGroup>

  

        <FormGroup className="my-2" controlId="name" >
          <FormLabel>NAME</FormLabel>
          <FormControl
            type="text"
            placeholder="ENTER YOUR NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></FormControl>
        </FormGroup>

        <FormGroup className="my-2" controlId="email">
          <FormLabel>EMAIL</FormLabel>
          <FormControl
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></FormControl>
        </FormGroup>

        <FormGroup className="my-2" controlId="password">
          <FormLabel>PASSWORD</FormLabel>
          <FormControl
            type="password"
            placeholder="ENTER YOUR PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup className="my-2" controlId="confirmPassword">
          <FormLabel>CONFIRM PASSWORD</FormLabel>
          <FormControl
            type="password"
            placeholder="CONFIRM YOUR PASSWORD"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          ></FormControl>
        </FormGroup>


        <Button type="submit" variant="primary"  className="mt-3" >
            Update
        </Button>

      


      </Form>
    </FormContainer>
  );
};
export default Profile;