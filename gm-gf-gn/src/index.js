import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

let currDate = new Date();
// let currDate = new Date(2021,9,11,1);
// it's 24 hours clock .
// first value year, month , day , hours
currDate=currDate.getHours();

let greeting = ' ';
// Inling style
const cssStyle = { };


if(currDate >= 1 && currDate < 12){
  // && and 
  greeting = 'Good Morning';
  cssStyle.color= 'Green';


}else if(currDate >= 12 && currDate < 19){
  greeting ='Good Afternoon';
  cssStyle.color= 'Orange';
}else{
  greeting = "Good Night";
  cssStyle.color= 'Black';
}


ReactDom.render(
  <>
  <div>
    <h1>Time is ,{currDate } </h1>
    {/* Timing */}
    <h1>Hello sir,<span   style ={cssStyle}> {greeting}</span></h1>
  </div>
  </>,
  document.getElementById('root')
  // dom pass.
);