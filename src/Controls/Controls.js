import React from "react";
import "./Controls.css"
import Builder from "./Builder/Builder";

const Controls = (props)=>{
    const products = [
        {title: "product1" , type: "product1"},
        {title: "product2" , type: "product2"},
        {title: "product3" , type: "product3"},
        {title: "product4" , type: "product4"},
    ]
    return(
        <div className="controls">
            {products.map((item)=>{
                return <Builder key={item.title} title={item.title} />
            })}
            
        </div>
    )
}

export default Controls