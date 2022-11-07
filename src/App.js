import React from 'react';
//import logo from './logo.svg'; our icon gose here
import { Route, Routes } from 'react-router';
import './App.css';
import CardAboutUs from './component/About_us/CardAboutUs'
import Footer from './component/Footer/Footer';
import Nav from './component/NavBar/Nav'


//paths
import Home from './component/Home/Home'
import Profile from './component/profile/Profile';

function App() {
  return (
    <>
      <Nav/>

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
