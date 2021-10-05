import React from 'react';
import './Card.css'

function Cards(props){
    
    return(
        
        <div className= "cards">
          <div className = "card">
            <div className ="card_info">
               <h1 className = "card_title bg">{props.title}</h1>
               <h2 className = "card_contain">{props.symbol}</h2>
            </div>
            </div>
        </div>
    )
}

export default Cards;







