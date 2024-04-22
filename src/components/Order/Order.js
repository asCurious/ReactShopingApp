import React from "react";
import Wrapper from "../../hoc/wrapper";
import Button from "../UI/Button/Button";

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
            <p>مایل به ادامه خرید هستید؟</p>
            <button btnType="success">بله</button>
            <button btnType="danger">خیر</button>
        </Wrapper>
    )
}

export default Order;