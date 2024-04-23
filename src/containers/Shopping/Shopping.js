import React , {useState} from "react";
import Wrapper from "../../hoc/wrapper";
import Controls from "../../Controls/Controls.css/Controls";
import Modal from "../../components/UI/Modal/Modal";
import Order from "../../components/Order/Order";

const prices = {
    product1: 10000,
    product2: 15000,
    product3: 30000,
    product4: 45000,
}
const Shopping = (props)=>{
    const [state, setState] = useState({
      products: {
        product1: 0,
        product2: 0,
        product3: 0,
        product4: 0,
      },
      totalPrice: 0,
      purchased: false,
    });

    const addProductHandler = (type)=> {
      const prevCount = state.products[type];
      const updatedCount = prevCount + 1;
      const updatedProducts = {
        ...state.products
      };
      updatedProducts[type] = updatedCount;
      const priceAdd = prices[type];
      const prevPrice = state.totalPrice;
      const newPrice = prevPrice + priceAdd;
      setState({ totalPrice: newPrice, products: updatedProducts });
    };
    const removeProductHandler = (type)=>{
        const prevCount = state.products[type];
        const updatedCount = prevCount - 1;
        const updatedProducts = {
          ...state.products
        };
        updatedProducts[type] = updatedCount;
        const priceSub = prices[type];
        const prevPrice = state.totalPrice;
        const newPrice = prevPrice - priceSub;
        setState({ totalPrice: newPrice, products: updatedProducts });
    }
    const purchasedHandler = ()=>{
      setState(prevState => ({ ...prevState, purchased: true }));
    }
    const modalCloseHandler = ()=>{
      setState(prevState => ({ ...prevState, purchased: false }));
    }
    const purchasedContinueHandler = ()=>{
      console.log("purchasedContinueHandler")
    }
    return(
        <Wrapper>
          <Modal show={state.purchased} modalClose={modalCloseHandler}>
            <Order products={state.products} 
            continue={purchasedContinueHandler}
            cancel={modalCloseHandler}
            />
          </Modal>
            <Controls 
            productAdd={addProductHandler}
            productRemove={removeProductHandler}
            price={state.totalPrice}
            order={purchasedHandler}
            />
        </Wrapper>
    )
}

export default Shopping;