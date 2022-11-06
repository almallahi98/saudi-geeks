//import logo from './logo.svg'; our icon gose here
import { Route, Routes } from 'react-router';
import './App.css';

//paths
import Home from './component/Home/Home'


function App() {
  return (
    <>
      {/* router here */}
      <Routes>
        <Route path='' element={<Home/>}/>
      </Routes>
      
    </>
  );
}

export default App;
