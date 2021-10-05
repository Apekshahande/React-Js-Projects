import React from 'react';

const Not_MatchElement = (props) =>{
    return(
        <>
        <div>
    
          <h1>{props.x} {props.y} {props.z} </h1>
          <h1>This Is Not Matching.</h1>
          <hr />
        </div>
        </>
      );
    
}

export default Not_MatchElement;