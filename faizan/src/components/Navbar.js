import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import logo from "../image/logo1.png";
import { UserContext } from "../App";
const Navbar = () => {

    const {state, dispatch} = useContext(UserContext)
    const RenderMenu = ()=>{
        if (state) {
            return(
                <>
                  <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>                    
                           
                            <li className="nav-item ">
                                <Link className="nav-link" to="/Logout">Logout</Link>
                            </li>
                </>
            )
        }else{
            return(
            <>
            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>                    
                            <li className="nav-item ">
                                <Link className="nav-link" to="/Signup">Registration</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/Login">Login</Link>
                            </li>
            </>
            )
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm  navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="logo" style={{
                            height: "33px",
                            width: "80px"
                        }}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                          <RenderMenu />

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar