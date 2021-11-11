import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {
    const deleteNote =() =>{
        props.deleteItem(props.id);
        // which unick key we have to delete.
    }
    return (
        <>
            <div className = "note">
                <h1>{props.title}</h1>
                <br />
                <hr />
                <p> {props.content}</p>
                <button className ="btn" onClick ={deleteNote}>
                   <DeleteOutlineIcon  className ="deleteIcon"/>
                </button>
                    
            </div>
        </>
    )
}

export default Note;
