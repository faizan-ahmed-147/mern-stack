import React, { useContext } from 'react'

import '../componentcss/loginPage.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { UserContext } from "../App";

const Login = () => {

  // logout toogle

  const {state, dispatch} = useContext(UserContext)


  const navigate = useNavigate();
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])

  const loginUser = async (e) => {
    e.preventDefault();
   
    const res = await fetch("/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });
  
    const data = await res.json()
    if (res.status === 400 || !data) {
      window.alert("Invalid crediential")
      console.log("Invalid crediential");
    }else{
      dispatch({type:"USER", payload:true})
      window.alert("Login Succesfully")
      console.log("Login Succesfully");
      navigate('/');
      
    }
  }


  return (
    <>
      <div className="container">
        <div className="login">
          <div className="login-heading">
            <h2>Login To Your Account</h2>
          </div>
          <form  className="login-form" method="POST">
            <div className="login-detail">
              <label className="icon" htmlFor="email">
                <i className="zmdi zmdi-email icon material-icons-name zmdi-hc-lg"></i>
              </label>
              <input type="email" name="email" id='email' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)}  placeholder=' Enter Your Email' />
            </div>
            <div className="login-detail">
              <label className="icon" htmlFor="password">
                <i className="zmdi zmdi-phone-in-talk icon material-icons-name zmdi-hc-lg"></i>
              </label>
              <input type="text" name="password" id='password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)}  placeholder=' Enter Your password' />
            </div>
            <div className="signuplink">
              <Link to="/Signup" className="loginlink">Create An Account</Link>
            </div>
            <div className="btn">
              <input type="submit" name='signup' id="signup" value="Login" onClick={loginUser}/>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login