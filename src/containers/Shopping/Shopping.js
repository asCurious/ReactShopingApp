import React , {useState} from "react";
import Wrapper from "../../hoc/wrapper";
import Controls from "../../Controls/Controls.css/Controls";

const Shopping = (props)=>{
    const [state, setState] = useState({
      products: {
        product1: 0,
        product2: 0,
        product3: 0,
        product4: 0,
      },
      totalPrice: 0,
    });
    return(
        <Wrapper>
            <Controls />
        </Wrapper>
    )
}

export default Shopping;