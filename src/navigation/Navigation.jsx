import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import CustomerScreen from '../screens/CustomerScreen';
import ManagerScreen from '../screens/ManagerScreen';
import CreateCustomerScreen from '../screens/CreateCustomerScreen';

const Navigation=(props)=> {
  return (
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route path="/customer" element={<CustomerScreen/>}/>
          <Route path="/manager" element={<ManagerScreen/>}/>
          <Route exact path="/customer/accounts" element={<CreateCustomerScreen/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default Navigation;
