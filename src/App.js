
import React from 'react'
import NavBar from './navigation/NavBar';
import Navigation from './navigation/Navigation';
import './App.css';

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
    <div className='app'>
      <div className='navbar'>
      <NavBar user={user}/>
      </div>
      <div className='content'>
      <Navigation/>
      </div>
    </div>
  )
}

export default App;