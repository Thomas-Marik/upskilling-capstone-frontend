import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import CustomerScreen from '../screens/CustomerScreen';
import ManagerScreen from '../screens/ManagerScreen';

const Navigation=(props)=> {
  return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/customer" element={<CustomerScreen/>}/>
          <Route path="/manager" element={<ManagerScreen/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default Navigation;
