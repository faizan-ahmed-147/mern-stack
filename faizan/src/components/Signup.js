import React from 'react'
import '../componentcss/SignupPage.css';
import { Link, useNavigate } from "react-router-dom";

import { useState } from 'react';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState ({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });
  let name, value;


  const handleInputs = (e)=>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value})
    console.log(name);
    console.log(value);
  }

  const postData = async (e)=>{
  e.preventDefault();
  const {name, email, phone, work, password, cpassword} = user;
  const res = await fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name, email, phone, work, password, cpassword
    })
  });

  const data = await res.json()
  if (res.status === 422 || !data) {
    window.alert("Invalid crediential")
    console.log("Invalid crediential");
  }else{
    window.alert("SignUp Succesfully")
    console.log("SignUP Succesfully");
    navigate('/Login');
    
  }



  }

  return (
    <>
    <div className="container">
      <div className="signup">
        <div className="signup-heading">
          <h2>SignUp</h2>
        </div>
        <form className="signup-form" method="POST">
          <div className="signup-detail">
          <label className="icon" htmlFor="name">
          <i className="zmdi zmdi-account icon material-icons-name zmdi-hc-lg "></i>
          </label>
          <input type="text" name="name" id='name' autoComplete='off' value={user.name} onChange={handleInputs} placeholder=' Enter Your Name'/>
          </div>
          <div className="signup-detail">
          <label className="icon" htmlFor="email">
          <i className="zmdi zmdi-email icon material-icons-name zmdi-hc-lg"></i>
          </label>
          <input type="email" name="email" id='email' autoComplete='off' value={user.email} onChange={handleInputs} placeholder=' Enter Your Email'/>
          </div>
          <div className="signup-detail">
          <label className="icon" htmlFor="phone">
          <i className="zmdi zmdi-phone-in-talk icon material-icons-name zmdi-hc-lg"></i>
          </label>
          <input type="number" name="phone" id='phone' autoComplete='off' value={user.phone} onChange={handleInputs} placeholder=' Enter Your Phone Number'/>
          </div>
          <div className="signup-detail">
          <label className="icon" htmlFor="work">
          <i className="zmdi zmdi-account icon material-icons-slideshow zmdi-hc-lg"></i>
          </label>
          <input type="text" name="work" id='work' autoComplete='off' value={user.work} onChange={handleInputs} placeholder=' Enter Your Profession'/>
          </div>
          <div className="signup-detail">
          <label className="icon" htmlFor="password">
          <i className="zmdi zmdi-lock icon material-icons-name zmdi-hc-lg"></i>
          </label>
          <input type="text" name="password" id='password' autoComplete='off' value={user.password} onChange={handleInputs} placeholder=' Enter Your Password'/>
          </div>
          <div className="signup-detail">
          <label className="icon" htmlFor="cpassword">
          <i className="zmdi zmdi-lock icon material-icons-name zmdi-hc-lg"></i>
          </label>
          <input type="text" name="cpassword" id='cpassword' autoComplete='off' value={user.cpassword} onChange={handleInputs} placeholder=' Enter Your Confirm Password'/>
          </div>
          <div className="loginlink">
          <Link to="/Login" className="loginlink">I Am Already Register</Link>
          </div>
          <div className="btn">
            <input type="submit" name='signup' id="signup" value="Register" onClick={postData}/>
          </div>
        </form >
      </div>
    </div>
    </>
  )
}

export default Signup