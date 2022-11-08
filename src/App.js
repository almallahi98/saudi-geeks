
import './App.css';

import React, { useState } from "react";
import ReactDOM from "react-dom";

import CardAboutUs from './component/About_us/CardAboutUs'
import Footer from './component/Footer/Footer';
import Nav from './component/NavBar/Nav'
//paths
import Home from './component/Home/Home'
import { Route , Routes } from 'react-router';

import Profile from './component/profile/Profile';

function App() {
 


  return (
    <>

     
        
     
      

      

      {/* router here */}
       <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about_us' element={<CardAboutUs/>}/>
        <Route path='profile' element={<Profile/>}/>
        {/* <Route path='about' element={''}/> page is not completed */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
