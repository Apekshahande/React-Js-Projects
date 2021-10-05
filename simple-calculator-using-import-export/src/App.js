import React from 'react';
import  { add ,sub,mult,div} from './component/Calc';

function App(){
    return(
    <> 
        <ul>
            <li> Sum of two Number is :- {add( 40, 4)}</li>
            <li>  {sub( 40, 4)}</li>
            <li>  {mult( 40, 4)}</li>
            <li>  {div( 40, 4)}</li>
        </ul>
    </>
    );
    
}
export default App;