import React from "react";
import "./builder.css"

const Builder = (props)=>{
    return(
        <div>
            <div>{props.title}</div>
            <button>Add</button>
            <button>Remove</button>
        </div>
    )
}

export default Builder