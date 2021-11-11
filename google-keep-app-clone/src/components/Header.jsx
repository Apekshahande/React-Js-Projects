import React from 'react';
import logo from './images/logo.jpg'
import '../App.css';

const Header = () =>{
  return(
    <>
    <div className = "header">
        <img src = {logo} alt = 'logo'  width = '70' height ='50'/>
        <h1>My Keep App </h1>

    </div>
    </>
  );
}

export default Header;