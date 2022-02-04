import React from 'react';
import './HomeScreen.css';
import logo from '../assets/images/logo.png'
import Login from '../components/login/Login';

const HomeScreen=()=> {
  return (
        <div className='main'>
          <div className='main-header'>
            <img className='logo' src={logo} alt="logo"/>
            <hr  className='lines'
                  style={{
                  color: '#0e6302',
                  backgroundColor: '#000000',
                  height: 1,
                  borderColor : '#000000'
            }}/>

          </div>
          <div className="main-login">
              <Login/>
          </div>
                <h1 className='main-headline'></h1>
        </div>
  )
}

export default HomeScreen;
