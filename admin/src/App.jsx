import React from "react";
// import AdminHeader from "./components/AdminHeader";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/NavBar";


const App = () => {
  return (
    <div>
     
    
  
      <NavBar />
      <ToastContainer  position="top-center" autoClose={1500} />
      <Container className="my-2">
      <Outlet />
      </Container>
  
    </div>
  );
};

export default App;
