import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
// import Note from './Note';

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);
  

    // const CreatedNote
    const [note, setNote] = useState({
        // current data , set data. note is state variable .
        title: " ",
        content : " ",
        // propertys.
    });
     
    const InputEvent =(event)=>{

        // const value = event.traget.value;
        // const name = event.target.name;

        const {name ,value} = event.target;

        setNote((prevData) =>{
            return {
                ...prevData,
                // it wil
                [name]:value,
                // name match or not .
                // it's for updating setnote value
            }
        })
        console.log(note)
    }

    const AddEvent = () => {
        props.passNote(note)
        setNote({
            title: " ",
            content : " ",}
            // it's for clearing after AddEvent will be work.
        );
      
    }

    const expandIt = () =>{
        setExpand(true);
    }

    const backtoNormal = () => {
        setExpand(false);
    }

    
    
    
    return (
        <>
            <div className = "main_note" onDoubleClick = {backtoNormal}>
                <form className ="card">
                    {/* <div className ="card"> */}
                   { expand?
                        <input 
                            type = "text"
                            name = "title"
                            value = {note.title}
                            onChange = {InputEvent}
                            placeholder = "Title"
                            autoComplete="off" 
                                 
                            /> : null}
                        <hr /> 
                    <textarea 
                        rows =" "
                        column =" "
                        name = "content"
                        value = {note.content}
                        onChange = {InputEvent}
                        placeholder = "Write a note..."
                        onClick ={expandIt}
                        onDoubleClick = {backtoNormal}
                        
                        ></textarea>
                   { expand?
                    <Button onClick = {AddEvent}>
                        <AddIcon  className ="plus_sign" />
                    </Button> : null}
                {/* </div> */}
            </form> 
                
            </div>
        </>
    );
}

export default CreateNote;
