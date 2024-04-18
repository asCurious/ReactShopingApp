import React from "react";
import "./Button.css"

const Button = (props)=>{
    <Button className={`btn ${props.btnType}`} onClick={props.click}>
        {props.children}
    </Button>
}

export default Button;