
import React from 'react'
import NavBar from './navigation/NavBar';
import Navigation from './navigation/Navigation';
import './App.css';
import LoginNav from './navigation/navBar/LoginNav';
import ManagerNav from './navigation/navBar/ManagerNav';
import CustomerNav from './navigation/navBar/CustomerNav';
import HomeScreen from './screens/HomeScreen';
import {SideBar, MainContent, BrowserRouter, Routes, Route} from 'react-router-dom'

const user=[{
userName:"Sunracer",
userPass:"Password",
role:"manager",
bio:{
    firstname:"matthew",
    lastname:"hanrahan",
    email:"sunracer1977@gmail.com",
    dob:"07/20/1977",
    address:{
        street:"2745 Michelle Ct",
        city:"Creedmoor",
        state:"NC",
        areaCode:"27522",
             },
    },
account:[
     {
    accountId:1234567890,
    accountType:"checking",
    accountBalance:12000,
    transactions:
        [{
        transactionId:1,
        transactionType:"atm",
        transactionAmount:1000,
        transactionDate:"02/02/2022",
        }],
      }],

},
{
userName:"Thomasmarik",
userPass:"Password",
role:"customer",
bio:{
    firstname:"matt",
    lastname:"hanrahan",
    email:"sunracer1977@gmail.com",
    dob:"07/20/1977",
    address:{
        street:"2745 Michelle Ct",
        city:"Creedmoor",
        state:"NC",
        areaCode:"27522",
             },
    },
account:[
     {
    accountId:1234567890,
    accountType:"checking",
    accountBalance:12000,
    transactions:
        [{
        transactionId:1,
        transactionType:"atm",
        transactionAmount:1000,
        transactionDate:"02/02/2022",
        }],
      }],

},]


const App=()=> {
  return (
    <BrowserRouter>
       <div className='app'>
      <div className='navbar'>
      
        <Routes>
          <Route exact path="/" element={<LoginNav/>}/>
          <Route exact path="/manager" element={<ManagerNav/>}/>
          <Route exact path="/customer" element={<CustomerNav/>}/>
        </Routes>
      
      </div>
      <div className='content'>
    
       <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/manager" element={<HomeScreen/>}/>
          <Route exact path="/customer" element={<HomeScreen/>}/>   
       </Routes>

    
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;