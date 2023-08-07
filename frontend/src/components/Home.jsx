import React from "react";
import "./Home.css"; 
import { useSelector } from "react-redux";

const Home = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const name = userInfo?.name; 

  return (
    <div className="home-container">
      <div className="content">
        {name ? (
          <>
            <h1 className="heading">Welcome, {name}!</h1>
            <p className="sub-heading">The Journey Begins here</p>
          </>
        ) : (
          <p className="sub-heading">
          Hello User! Please login if you're our existing customer,
          <br></br>
           or you can always join us now!
        </p>
        )}
      </div>
    </div>
  );
};

export default Home;

