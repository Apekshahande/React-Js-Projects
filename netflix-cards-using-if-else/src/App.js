import React from 'react';
import Netflix from './components/Netflix';
import Amazon from './components/Amazon';

const favSeries = 'amazon';

// const FavS =() =>{
//     if(favSeries === 'netflix'){
//         return <Netflix />;
//     }else{
//         return <Amazon />;

//     }
// }

const App =()=>{
   return(
    <>
        <h1 className ="heading_style"> IF-ELSE Card according to condition</h1>
        {/* <FavS /> */}
        {(favSeries === 'netflix')? <Netflix />: <Amazon /> }
        {/* it's ternary operator. */}
      
  </>


 
   
)}

export default App ;
