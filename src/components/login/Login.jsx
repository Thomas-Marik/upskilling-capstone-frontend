import React  from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../../redux/actions/UserActions';



const Login=()=> {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/customer`; 
        navigate(path);
      }
    // const [username, setUsername] = React.useState();
	// const [password, setPassword] = React.useState();

	// const dispatch = useDispatch();


  return (
         <div className="login-container">
            <div className='login-box'>
  
                <input
                
                    type='text'
                    placeholder='Username'
                    className='login-input'
                    // onChange={(ev) => {
                    //     setUsername(ev.target.value);
                    // }}
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='login-input'
                    // onChange={(input) => {
                    //     setPassword(input.target.value);
                    // }}
                />
                <span
                    className='submit-button'
                    onClick={routeChange}
                    // onClick={() => dispatch(loginUser(username, password))}
                >
                    Login
                </span>
                <p
                    className='register'
                    onClick={routeChange}
                    // onClick={() => props.setCurrentView('register')}
                >
                    Not a User? Register Here
                </p>
            </div>
        </div>
    )
}

export default Login ;
