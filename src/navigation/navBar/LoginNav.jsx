import React, {useCallback, useState} from 'react';
import { useNavigate} from 'react-router-dom'

const LoginNav =({props})=> {
    const navigate=useNavigate();
    const[userName,setUserName]=useState();
    const[password, setPassword]=useState();

  const handleSubmit=()=>{
      if (userName==props.user.username && password==props.user.password && props.user.role == "manager"){
         useCallback(()=>navigate('/manager',{replace:true}),[navigate]);
      }

  }  
  return <div>
        <form className="login-form" onSubmit={handleSubmit}>
            <label className='login-label'>Username:</label>
            <input className='login-input' onChange={(value)=>setUserName}/>
            <label>Password:</label>
            <input className='login-input' onChange={(value)=>setPassword}/>
            <button>Login</button>
        </form>
  </div>;
}

export default LoginNav;
