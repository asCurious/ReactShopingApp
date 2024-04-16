import React from "react";
import Wrapper from "../../hoc/wrapper";

const Order = (props) =>{
    const summery = Object.keys(props.products).map((item) =>{
        return (
            <li key={item}>
                {item} : {props.products[item]}
            </li>
        )
    })
    return(
        <Wrapper>
            <h3>سفارش</h3>
            <ul>{summery}</ul>
        </Wrapper>
    )
}

export default Order;