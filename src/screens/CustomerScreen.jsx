import React from 'react';
import { Link } from 'react-router-dom';
import './CustomerScreen.css'

const name= "Matthew";

const linkStyle={
  backgroundColor:"hsl(120, 60%, 22%)",
  width: "50%",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "15px", 
  color: "#fff",
  marginTop:"25px",
  cursor: "pointer",
  transition: "background-color 0.5s ease-in-out",
  textDecoration:"none",
}

const  CustomerScreen =()=> {
  
  return (
     
      <div className="customer-container">
        <div className="customer-header">
          <h1 className="customer-title">Welcome Back, {`${name}`} ! </h1>
        </div> 
        <div className="customer-menu">
        <Link style={linkStyle} to="/customer/accounts">My Accounts</Link>
        <Link style={linkStyle}  to="/customer/edit">Edit Profile</Link>
        <Link style={linkStyle}  to="/">Make Transaction</Link>
        <Link style={linkStyle}  to="/">View Transaction History</Link>
        <Link style={linkStyle}  to="/">Transfer Funds to Other Account</Link>
        </div>
        </div>
      
  )
}

export default CustomerScreen;
