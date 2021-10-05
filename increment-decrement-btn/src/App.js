import React from 'react';

// import Decrement from './components/Decrement';
import Increment from './components/Increment';


const App=()=>{
  let Count = 0;
  return(
  <> 
    <div>
      <Increment  Count = {Count}/>
      
      {/* <Decrement Count = {Count} /> */}
    

    </div>
    
    
 
  
  </>
  );
}
export default App;