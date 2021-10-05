import React, {useState} from 'react';
import './App.css'
import ToDoList from './ToDoList';

const App = () =>{
  const [inputList, setInputList] =useState(" ");
  const[addTodo, addNewTodo] = useState([]);
  // it will add into array

  const itemEvent = (event) =>{

    // event is for excesing the obj
    setInputList(event.target.value)
  }

  const Add = () => {
    alert('Add inside the list')
    addNewTodo((oldItem) =>{
      // object or array we can excess.
      return [...oldItem, inputList]
      // user data  , last input stored by user.
      //  it will create new array 
    });
    setInputList('');

  }

  const deleteItems = (id) => {
    console.log('deleted')
    addNewTodo((oldItem)=>{
      return oldItem.filter((arrElem, index)=>{
        return index !== id;
        //  index is not === id . then only return
        
      })
    })

}

  
  return(
    <>
    <div className ="main_div">
      <div className ="center_div">
        <h1>ToDo List</h1>
        <input type="text" placeholder ="Add A Item" onChange = {itemEvent} value = {inputList}/>
        <button onClick = {Add}>+</button>
        <ol>
        {/* <li> {inputList}</li> */}
        {addTodo.map((val ,index)=>{
          return(
            <> 
              <ToDoList title ={val}  key ={index} id = {index}
                onSelect = {deleteItems}
              />
               {/* <li> {val}</li> */}
               {/* one by one we are showing here. */}
            </>
           )
          })}
        </ol>
      </div>
     </div>
    </>
  );
}
export default App;