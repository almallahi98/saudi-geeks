
import './App.css';
import Navs from './component/NavBar/Nav';
import About from './component/About_us/About_us'
import React, { useState } from "react";
import ReactDOM from "react-dom";
import LoginFrom from './component/NavBar/loginmodel/LoginForm
import CardAboutUs from './component/About_us/CardAboutUs'
import Footer from './component/Footer/Footer';
import Nav from './component/NavBar/Nav'
//paths
import Home from './component/Home/Home'
import Profile from './component/profile/Profile';

function App() {
 


  return (
    <>

     
        
      {/* router here */}
      

      

      {/* router here */}

      <Routes>

        <Route path='' element={<Home/>}/>
        <Route path='aboutus' element={<CardAboutUs/>}/>
        <Route path='profile' element={<Profile/>}/>
        {/* <Route path='about' element={''}/> page is not completed */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
