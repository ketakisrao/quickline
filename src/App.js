import React from 'react';
import Hero from './Components/Hero';
import CustomNavbar from './Components/CustomNavbar';
import './App.scss';

const product_name = "Quickline";


function App() {
  return (
      <div className="App">
          <CustomNavbar></CustomNavbar>
          <Hero></Hero>
          <div className="content"></div>
    </div>
  );
}

export default App;
