import React from "react";

function EyesOnMe() {
    function eyesOnMe(event){
        console.log(`${focus()}:${blur()}`)
    }
    
    return <button onClick={eyesOnMe}>Eyes on me</button>
}


function focus(){
    console.log("Good!")
}


function blur(){
    console.log("Hey! Eyes on me!")
}

export default EyesOnMe;