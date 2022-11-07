import React from 'react';
//import logo from './logo.svg'; our icon gose here
import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './component/Footer';

//paths
import Home from './component/Home/Home'

function App() {
  return (
    <>
      {/* <Nav/> */}

      {/* router here */}

      <Routes>
        <Route path='' element={<Home />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
