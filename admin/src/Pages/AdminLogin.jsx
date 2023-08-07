import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAdminloginMutation } from "../Redux/adminauth";
import { setCredentials } from "../Redux/adminSlice";
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  NavDropdown,
  Badge
} from "react-bootstrap";
import {toast} from 'react-toastify'
import FormContainer from '../components/FormContainer';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useAdminloginMutation();
  const adminInfo= useSelector((state) => state.adminInfo);


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success(`Hello ${res.name}`)
      navigate('/');
    } catch (err) {
      toast.error('Invalid Credentials')
    }
  };

  return (
    <FormContainer>
      <h1>Admin Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="my-2" controlId="email">
          <FormLabel>EMAIL ADDRESS</FormLabel>
          <FormControl
            type="email"
            placeholder="ENTER YOUR EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="my-2" controlId="password">
          <FormLabel>PASSWORD</FormLabel>
          <FormControl
            type="password"
            placeholder="ENTER YOUR PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <Button type="submit" variant="primary" className="mt-3" disabled={isLoading}>
          {isLoading ? 'LOADING...' : 'LOGIN'}
        </Button>
      </Form>
    </FormContainer>
  );
};

export default AdminLogin;
