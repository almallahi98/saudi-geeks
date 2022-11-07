import React from 'react';
//import logo from './logo.svg'; our icon gose here
import { Route, Routes } from 'react-router';
import './App.css';
import CardAboutUs from './component/About_us/CardAboutUs'

//paths
import Home from './component/Home/Home'


function App() {
  return (
    <>
      {/* <Nav/> */}
        
      {/* router here */}
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='aboutus' element={<CardAboutUs/>}/>
      </Routes>
      
    </>
  );
}

export default App;
