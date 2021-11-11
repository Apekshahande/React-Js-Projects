import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
// material ui icons : - it's in component format .
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button'
import { Tooltip } from '@material-ui/core';


const Material_Ui = () => {
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
        <h1>Material_Ui Best Ui Framework of React Js </h1>
        <h1>{Count}</h1>
        <div className = 'btn_div'>
          <Tooltip title = "Add Item">
          <Button onClick ={Increment} className="btn_green" > 
          <AddIcon /> 
          {/* Increm  */}
           </Button>
          </Tooltip>
          <Tooltip title = "Delete">
          {/* it will give same title when we will take our arrow on that button */}
          <Button onClick ={Decrement} className = "btn_red">
            <RemoveIcon /> 
          {/* Decrem */} 
          </Button>
          </Tooltip>
          {/* Costom tag. */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Material_Ui;
