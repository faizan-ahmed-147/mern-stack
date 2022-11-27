import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
require("../componentcss/aboutPage.css")

const About = () => {
  const navigate = useNavigate();
  const [ userData , setuserData]= useState({})
 
    const verifyPage=async()=>{

      try{
        const res=await fetch('/About',{
          method:"GET",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
          },
          credentials:"include"
      });
      const data=await res.json();
      // console.log(data);
      setuserData(data);
      if(!res.status===200){
          const err=new Error(res.error);
          throw err;
      }
  }catch(err) {
      console.log(err);
      navigate("/login");
  }
}

useEffect(()=>{
  verifyPage();
},[])

  return (
    <>
      <div className="container-about">
        <div className="about">
          <div className="about-heading">
            <h1>User Details</h1>
          </div>
          <form action="" method="">
            <div className="about-detail">
              <div className="about-information">
                <h3 className="about-heading1">User <hr /></h3>
                <div className='info'>user id:</div>
                <div className='info'>Name:</div>
                <div className='info'>Email:</div>
                <div className='info'>Phone:</div>
                <div className='info'>Profession:</div>

              </div>
              <div className="about-information1">
                <h3 className="about-heading1">Detail <hr /></h3>
                <div className='info'>{userData._id}</div>
                <div className='info'>{userData.name}</div>
                <div className='info'>{userData.email}</div>
                <div className='info'>{userData.phone}</div>
                <div className='info'>{userData.work}</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}
export default About


