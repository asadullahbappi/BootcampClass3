import React from 'react';

function Dinner (props) {
    return(
        <div>
        <h1> Today we are surving {props.dishName}</h1>
        <h1> Today we are surving {props.sweetDish}</h1>
        
        </div>
    )
}

export default Dinner;