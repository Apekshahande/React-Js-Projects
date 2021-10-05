import React from "react";
import MatchElement from "./components/MatchElement";
import Not_MatchElement from "./components/Not_MatchElement";

// this is for we can use jsx properly.

const SlotM =(props) =>{

  
  // let x ='😃';
  // // it will should be inside the single code .
  // let y = '😃';
  // let z = '🎅';

  // Object destructuring mense break in easy way.
//   let x = props.x;
//   let y = props.y;
//   let z = props.z;

  let {x , y,z} = props ;
//   When we have to excess the value in third component

   if((x === y) && (y=== z)){
    return(
      <>
      <MatchElement  x = {x} y = {y} z= {z}/>
      
      {/* <div className ="slot_inner">
        <h1>{x} {y} {z} </h1>
        <h1>This is Matching.</h1>
        <hr />
      </div> */}
      </>
    );
  }else{
    return(
      <>
        <Not_MatchElement x = {x} y = {y} z= {z} />
      {/* <div>
  
        <h1>{x} {y} {z} </h1>
        <h1>This Is Not Matching.</h1>
        <hr />
      </div> */}
      </>
    );
  }
}

export default SlotM;
