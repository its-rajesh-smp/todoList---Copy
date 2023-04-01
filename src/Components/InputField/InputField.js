import React, { useRef } from 'react';
import "./InputField.css"
import {Input,Button} from '../SillyComponents/SillyComponents';

// =======Context
import DataSetter_Context from '../../Context/DataSetter_Context';



function  InputField (props) {


    // Ref Of InputField
    const NameInputRef=useRef()

    // Get Data On Button Click
    const buttonOnclick=(e)=>{
        e.preventDefault()
        // Get Data
        console.log(NameInputRef.current.value);
        // Send Data
    }


    return ( 
        <div className=' InputField-div '>
            <form>

                <Input for="name" placeholder="Enter Name" NameInputRef={NameInputRef} />
                <Button for="ADD" onClick={buttonOnclick} />
            
            </form>
        </div>
     );
}

export default InputField;
