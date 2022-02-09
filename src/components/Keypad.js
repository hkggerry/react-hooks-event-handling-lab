import React from "react";

function Keypad() {
    function keypad() {
        console.log("Entering password...")
    }
    return (
    <div>   
        <input 
            type="password"
            onChange={keypad}
        />     
    </div>
    )
}

export default Keypad;
