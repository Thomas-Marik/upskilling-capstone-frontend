import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginNav from './navBar/LoginNav';
import CustomerNav from './navBar/CustomerNav';
import ManagerNav from './navBar/ManagerNav';

const NavBar=({props})=> {
  return (
      <BrowserRouter>
      <Routes>
          <Route path="/s" element={<LoginNav />}/>
          <Route path="/managers" element={<ManagerNav />}/>
          <Route path="/customers" element={<CustomerNav />}/>

      </Routes>
      </BrowserRouter>
  )
}

export default NavBar;
