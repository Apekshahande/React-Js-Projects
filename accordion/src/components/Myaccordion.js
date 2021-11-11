import React, {useState} from 'react'

const Myaccordion = ({question,answer}) => {
    // objct destructuring.
    const[show,setShow] = useState(false);
    // const[show,setShow] = useState(true);

    return (
        <>
            <div className ="main-heading">
                <p onClick = {() => setShow(!show)}> {show?' - ': '+'} </p>
                <h3>{question}</h3>
                {/* all question will will get. */}

                
                
                
                
            </div>
            {show && <p className = "answers">{answer}</p>}
            
        </>
    )
}
export default Myaccordion;
