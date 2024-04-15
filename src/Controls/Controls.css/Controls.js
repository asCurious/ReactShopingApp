import React from "react";
import "./Controls.css"
import Builder from "../Builder/Builder";

const Controls = (props)=>{
    const products = [
        {title: "محصول1" , type: "product1"},
        {title: "محصول2" , type: "product2"},
        {title: "محصول3" , type: "product3"},
        {title: "محصول4" , type: "product4"},
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