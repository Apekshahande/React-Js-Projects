import React from 'react';
import './index.css'

// from react module.

function App(){
  let currDate= new Date(2021,9,22,23);
  currDate = currDate.getHours();

  let greeting = " ";
  let cssStyle = { };
  if(currDate >= 1 && currDate < 12){
    greeting = "Good Morning";
    cssStyle.color ="Green";
  }else if(currDate >= 12 && currDate < 20){
    greeting = "Good Afternoon";
    cssStyle.color= "Orange";
    
  }else if(currDate >= 20 &&  currDate <= 24){
    greeting ="Good Night";
    cssStyle.color ="black";
    
  }
  return(
    <div>
      <h1>Hello sir,<span   style ={cssStyle}> {greeting}</span></h1>
    </div>
  )
}
export default App;