import React from 'react';
//import logo from './logo.svg'; our icon gose here
import { Route, Routes } from 'react-router';
import './App.css';
// import Nav from './component/NavBar/Nav';
// import About from './component/About_us/About_us'

//paths
import Home from './component/Home/Home'


function App() {
  return (
    <>
      {/* <Nav/> */}
        
      {/* router here */}
      <Routes>
        <Route path='' element={<Home/>}/>
      </Routes>
      
    </>
  );
}

export default App;
