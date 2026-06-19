import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Component/navbar/Navbar'; 
// import Location from './Component/Location'; 
import Footer from './Component/Footer';  
import './Component/main.css'

function App() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Navbar />
      <Outlet /> 
      {/* <Location /> */}
      <Footer />
      
    </div>
  );
}

export default App;