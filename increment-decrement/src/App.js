import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Material_Ui from './Material_Ui';
// material ui icons : - it's in component format .
// import RemoveIcon from '@material-ui/icons/Remove';
// import Button from '@material-ui/core/Button'

const App = () => {
  let count = 0;
  const[Count,setCount] = useState(count)
  const Increment = () =>{
    setCount(Count+ 1)

  }
  const Decrement = () =>{
    if(Count > 0){
      setCount(Count- 1)
    }else{
      alert('Sorry , Zero Limit Reached.')
    }
    

  }

  return(
    <>
    <div className = 'main_div'>
      <div className = 'center_div'>
        <h1>{Count}</h1>
        <div className = 'btn_div'>
          <button onClick ={Increment} > 
          {/* <AddIcon />  */}
          Increm 
          </button>

          <button onClick ={Decrement}>
            {/* <RemoveIcon />  */}
            Decrem 
          </button>
          {/* Costom tag. */}
        </div>
      </div>
    </div>
    <Material_Ui />
    </>
  )
}

export default App;
