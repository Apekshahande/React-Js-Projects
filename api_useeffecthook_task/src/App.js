import React,{useState , useEffect} from 'react';

const App = () => {
  const[count , setCount] = useState(0) 

  const Increment = () =>{
    setCount(count+1)
  }

  useEffect(()=>{
    document.title = `You clicked me ${count} times`
    // useing document we can excess the title of the page.
  })
  
  return(
    <> 
     <button onClick = {Increment}>Click Me {count}</button>
    </>
  );
}
export default App;