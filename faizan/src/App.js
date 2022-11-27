import React, { createContext, useReducer } from 'react'
import "./App.css"
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Errorpage from './components/Errorpage'
import Logout from './components/Logout'
import { initialState, reducer } from "../src/reducer/UseReducer";
import { Routes, Route } from "react-router-dom";

export const UserContext =  createContext();

const App = () => {
  const  [state, dispatch ] = useReducer(reducer, initialState)

  return (
    <>
    <UserContext.Provider value={{state , dispatch}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Logout" element={<Logout />} />
        <Route element={<Errorpage />} />
      </Routes>
      </UserContext.Provider>

    </>
  )
}

export default App