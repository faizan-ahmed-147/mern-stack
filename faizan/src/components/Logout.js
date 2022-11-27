import React, { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
const Logout = () => {

    const {state, dispatch} = useContext(UserContext)


    const navigate = useNavigate();
    useEffect(()=>{
        fetch("/Logout", {
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        credentials:"include"
    }).then((res)=>{
        dispatch({type:"USER", payload:false})
        navigate("/Login");
        if(!res.status===200){
            const err=new Error(res.error);
            throw err;
        }
    }).catch((err)=>{
        console.log(err);
    })
})

  return (
    <div>Logout</div>
  )
}

export default Logout