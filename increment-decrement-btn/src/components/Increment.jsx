import React, {useState} from 'react';



const Increment = (props) =>{
    const state = useState();
    let[count,setCount] = useState(props.Count);
    // console.log(count);

    const IncNum =()=>{
        setCount(count+1);
    }
    const DecNum =()=>{
        setCount(count -1);
    }
    
    return(
        <><h1>{count}</h1>
        
        
        
        {/* <button onClick={IncNum}>InCrement</button> */}
        
            <button onClick={IncNum} >{props.Increment} Increment</button> 
            <button onClick={DecNum } >{props.Decrement} Decrement</button>
            <h2>{(count > 0)? "Positive Number":(count ===0 )? "Number is equal": "Negetive number"}</h2>
            

        
         
        </>
    )
}
export default Increment;