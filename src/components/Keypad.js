// Code Keypad Component Here
import React from "react";

function Keypad (){

    const onChange = (Event) => {
        console.log('Entering password...')
    }
    return (
        <div>
            <input onChange={onChange} type="password" />
        </div>
    )
}

export default Keypad;