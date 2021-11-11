import React, {useState} from 'react'
import {questions} from './api';
// array offen object.
// get the api  it's export directly.
import './accordion.css';
import Myaccordion from './Myaccordion';


const Accordion = () =>{
    const[data,setData]  = useState(questions);
    // api's all data will come inside the data variable. using useState
    return (
        <div>
           <section className = 'main-div'> 
                <h1>React Interview Questions </h1>
                {data.map((curElem)=>{
                    {/* directly we can not excess the object. */}
                    {/* currElem, index ,which array we are using.  */}
                    {/* const {id,question,answer} = curElem;
                    {/* it's value of all the objct properties. */}
                    {/* return <Myaccordion key ={id} question ={question} answer = {answer}/> */} 
                    return <Myaccordion key ={curElem.id} {...curElem}/>
                    {/* curElemt is an obj  When we will excess that then obj.property name*/}
                })}
            </section> 
             
            
        </div>
    );
}

export default Accordion;
