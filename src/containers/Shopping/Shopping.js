import React from "react";
import Wrapper from "../../hoc/wrapper";

const Shopping = (props)=>{
    state= {
        products:{
            product1: 0,
            product2: 0,
            product3: 0,
            product4: 0,
        },
        totalPrice: 0,
    }
    return(
        <Wrapper>
            <p>این یک متن تست است.</p>
        </Wrapper>
    )
}

export default Shopping;