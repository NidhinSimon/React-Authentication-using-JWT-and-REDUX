import React from 'react';
import './Home.css'; 
import { useNavigate } from "react-router-dom";




const Home = () => {
  const navigate = useNavigate();

  const handleAllUsersClick = () => {
    navigate("/alluser");
  };

  const handleAddUserClick = () => {
    navigate("/adduser");
  };

  return (
    <div className="home-container">
      <div className="content">
        <h1 className="heading">Welcome, Admin!</h1>
        <p className="sub-heading">Manage your Pages here </p>
        <div className="admin-actions">
        <button className="action-btn" onClick={handleAllUsersClick}>ALL USERS</button>
<button className="action-btn" onClick={handleAddUserClick}>ADD USER</button>

          
        </div>
      </div>
    </div>
  );
};

export default Home;
