import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginNav from './navBar/LoginNav';

const NavBar=({props})=> {
  return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginNav user={props.user}/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default NavBar;
