import React from 'react';
import './ManagerScreen.css';
import { Link } from 'react-router-dom';
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

const ManagerScreen =()=> {
  return( 
    <div className="manager-container">
    <div className="manager-header">
      <h1 className="manager-title">Bank Manager :{`${name}`}  </h1>
    </div> 
    <div className="manager-menu">
    <Link style={linkStyle} to="/customer/accounts">Create New User</Link>
    <Link style={linkStyle} to="/customer/accounts">Open New Account</Link>
    <Link style={linkStyle} to="/customer/accounts">Search Accounts</Link>
    <Link style={linkStyle} to="/customer/accounts">Delete Accounts</Link>
    <Link style={linkStyle}  to="/customer/edit">Edit Profile</Link>    
    <Link style={linkStyle}  to="/">View Transaction History</Link>
  
    </div>
    </div>
  
  )
}

export default ManagerScreen;
