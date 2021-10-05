import React from 'react';
import './component.css'
import Header from './Header';
import Side_Nav from './Side_Nav';

export default function Main_Component() {
    return (
        <div >
           
            <div className ="Header">
                 <Header  title = "NavBar"  />
            </div>
            <div className="text">
                <h1> Parent Component</h1>
            </div>
            <hr />
            
           
            <div>
                <div  className="left_nav">
                    <Side_Nav side="Left" />
                </div>
                <div  className="right_nav">
                    <Side_Nav side="right" />
                </div>
            </div>
            
            <div className= "Footer">
                <Header title ="Footer is awasome"/>
            </div>
            
            
           

           


        </div>
    )
}
