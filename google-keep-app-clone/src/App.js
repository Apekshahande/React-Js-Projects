import React, {useState} from 'react';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import Footer from './components/Footer';

const App = () =>{
  const[addItem, setAddItem] = useState([]);
  // we doesent have to write inside the function it should be inside the function component top
  const AddNote = (note) =>{
    // alert('i am clicked')
    setAddItem((prevData)=>{
      // it can excess all old data.
        return(
          [...prevData, note ]
          // pass data and note
        );
    })
    console.log(note);
    
  };
  

  const onDelete = (id) =>{
    setAddItem((olddata)=>
      olddata.filter((currdata , indx)=> {
        return indx !== id;
      })
  )
    // match id

  }

  return(
    <>
      <Header />
      {/* costom component */}
      {/* <CreateNote /> */}
      
      <CreateNote passNote = {AddNote} />
      
      {addItem.map((val, index)=>{
        return (
          <Note 
            key={index}
            // key is imp in map method.
            id={index}
            title={val.title}
            content = {val.content} 
            deleteItem ={onDelete}
            // for removing use filter method.
            />
            );
          })}

      {/* <Note /> */}
      <Footer />
    </>
  );
}

export default App;