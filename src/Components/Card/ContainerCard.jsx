import React from 'react';
import "./ContainerCard.css"

function  ContainerCard (props) {
    return ( 
        <div className=' ContainerCard-div '>
            {props.children}
        </div>
     );
}

export default ContainerCard;
