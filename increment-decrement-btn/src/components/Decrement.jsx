import React, {useState} from 'react';

const Decrement = (props) =>{
    const state = useState();
    let[count,setCount] = useState(props.Count);

    const Decrement=()=>{
        setCount( count - 1);
    };
    return (
        <>
        <h1>{count}</h1>
        <button onClick ={ Decrement}> Decrement</button>
        </>
    );
}

export default  Decrement;