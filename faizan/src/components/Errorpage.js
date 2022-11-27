import React from 'react'
import '../componentcss/errorPage.css';
import { Link } from "react-router-dom";
const Errorpage = () => {
  return (
    <>
    <div className="error-home">
      <div className="error">
        <div className="error-heading">
          <h1>We Are Sorry Page Not Found! 404</h1>
        </div>
        <div className="error-paragraph">
          <p>The Page Your Are Looking Might Has Been Removed For Some Issue</p>
        </div>
        
        <Link to="/" className="btn-error" >Back To Home Page</Link>
        
      </div>
      
    </div>
  </>
  )
}

export default Errorpage