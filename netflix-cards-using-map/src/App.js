import React from 'react';
import Sdata from './component/Sdata';
import Cards from './component/Cards';


// function ncard(val){
//   console.log(val);
//   return(
//     <Cards 
//      imgsrc = {val.imgsrc}
//      title = {val.title}
//      sname= {val.sname}
//      link = {val.link}
//      />
//   )
//   // in this function 3 parameter we are passing value , index , array 

// }

const App =()=>{
   return(
    <>
        <h1 className ="heading_style"> LIST OF TOP 5 NETFLIX SERIES IN 2021</h1>

        {/*3. using Arrow Function(Fat Arrow function) */}
        {Sdata.map((val,index)=>{
            console.log(index);
            {/* it will give the index in console. */}
            return(
            <Cards 
            key= {val.id}
            //  every card component we should have key unique id.
            imgsrc = {val.imgsrc}
            sname= {val.sname}
            title = {val.title}
            link = {val.link}
            />
        )
            
        })};


  {/* 2. using function inside the map method. */}
  {/* {Sdata.map(function ncard(val){
    return(
    <Cards 
     imgsrc = {val.imgsrc}
     title = {val.title}
     sname= {val.sname}
     link = {val.link}
     />
  )
    
  })}; */}

  {/* 1. using Function. */}
  {/* {Sdata.map(ncard)}; */}


  {/* it will also give the same result. */}
  {/* When we want to use js inside the render method then write inside the currly breaket. */}
  {/*inside the map function we passed one more function it's called callback function or it called function programming.  */}


  </>
   
)}

export default App ;
