import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/login',{email,password})
        .then((res)=> {console.log(res)
            alert("Login successfully")
        })
        .catch((err)=> console.log(err))
    }

  return (
      <div className='form_center'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} method='post'>
            <div className='input_group'>
                <input type='email'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <span></span>
                <label>Email</label>
            </div>
            <div className='input_group'>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <span></span>
                <label>Password</label>
            </div>
            <div className='pass'> Forgot Password</div>
            <input type='submit' value="Login"/>
            <div className='signup_link'>
                Don't have an account?<a href='#'> SignUp </a>
            </div>
        </form>
      </div>
  )
}

export default Login