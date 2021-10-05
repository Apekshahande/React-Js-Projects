import React, {useState} from 'react';

const App = () =>{
  let Time = new Date().toLocaleTimeString();

  // react hooks
  const [curTime , setTime] = useState(Time);
  // using useState we can change the state of anyvariable

  const UpdateTime = () =>{
    Time = new Date().toLocaleTimeString();
    setTime(Time)
  }
  setInterval(UpdateTime,1000);
  // it's used for automatic loop
  // inside this we can pass one callback function. 
  // 2 parameter meanse after how many second.


  return(
    <>
      <h1>{curTime }</h1>
      {/* <button onClick = {UpdateTime}>Get time</button> */}
      
    </>
  );
}
export default App;