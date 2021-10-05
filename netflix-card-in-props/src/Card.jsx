import React from "react";
import './index.css';

function Card(props){
    // all custom properti it will give as a object. 
    return(
      <>
     
     <div className = "cards">
       <div className= "card">
         <img src = {props.imgsrc} 
        //  for excessing the property form object props.property name/ key we are using.
         alt = "Top Movie" 
         className ="card_img" />
         <div className = "card_info">
            <span className ="card_category"> {props.title}</span>
            <h3 className ="card_title">{props.s_name} </h3>
            <a href ={props.link} target = "_blank">
              <button> Watch Now </button>
            </a>
         </div>
       </div>
     </div>
    </>
    );
  }
export default Card;  