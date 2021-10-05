import React from 'react';

const ToDoList = (props) =>{
    // props are mutible we can not change it.
    // const deleteItems = () => {
    //     console.log('deleted')
    // }

    return(
        <>
            <div className = 'todo_style'>
                <i className = 'fa fa-times' aria-hidden='true' onClick ={
                    () =>{ props.onSelect(props.id)}} />

                <li> {props.title}</li>
            </div>
            
        </>
    );
}

export default ToDoList;