import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
    
      <Header />
      
      <ToastContainer position="top-center" />
      
        <Container className="my-2">
          <Outlet />
        </Container>
 
    </div>
  );
};

export default App;
