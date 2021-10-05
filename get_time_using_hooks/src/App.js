
import React, {useState} from 'react'

const App = () =>{
    let curTime = new Date().toLocaleTimeString();
    
    const [Time,setCtime] = useState(curTime )
    // using use state.
    console.log(Time)

    const UpdateTime =() =>{
        let newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }
    return(
        <>
         <h1>{Time}</h1>
         <button onClick={UpdateTime }>Get Time</button>
        </>
    );
}
export default App;