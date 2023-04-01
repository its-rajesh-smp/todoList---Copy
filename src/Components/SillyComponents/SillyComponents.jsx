import React from 'react';
import "./SillyComponents.css"


// ===========INPUT===================

function  Input (props) {
    return ( 
        <div className=' Input-div '>
            <label htmlFor={props.for}>{props.for}</label>
            <input  ref={props.NameInputRef} type="text" placeholder={props.placeholder} />
        </div>
     );
}


// ============BUTTON===================

function Button(props){
    return (
        <button onClick={props.onClick} className='Button'>{props.for}</button>
    )
}

export  {Input,Button};
