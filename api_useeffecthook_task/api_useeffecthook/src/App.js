import React ,{useState, useEffect} from 'react';

const App = () =>{
  const [num , setNum] = useState(0)
  // hooks useState.
  const [nums , setNums] = useState(0)
  // useEffect is a hook it's coming top of the function.
  useEffect(()=>{
    alert('I am clicked')
    console.log("I am clicked...")
    // after the api if we want to do print something. then we can use useEffect.
  },[num]) // if [num] then when num value will be change then alert will be pop up.
  // ,[] empty array when firsttime page will render it will pop up only once.
  // **after render method it will run.  useEffect get's call outomatically

  //*** */ it's always accept the function.
  const Increment = () =>{
    setNum(num  + 1)
  }
  return (<>
    <button onClick= {() =>{setNum(num+ 1)}}//() =>{
    //   alert('i am clicked') // call back function. num is not geting increment.
    // }}
    >Click me {num}</button>
    {/* <button onClick= {Increment}>Click me {num}</button> */}
    <br /> <br />

    <button onClick= {() =>{setNums(nums + 1)}}>Click me {nums}</button>
  </>);
}
export default App;