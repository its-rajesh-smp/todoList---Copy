import React from 'react';
import "./Items.css"

function  Items (props) {
    return ( 
        <div className=' Items-div '>
            <h4>{props.name}</h4>
            <button>DELETE</button>
            <button>EDIT</button>
        </div>
     );
}

export default Items;
