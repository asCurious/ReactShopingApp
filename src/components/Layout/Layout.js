import React from "react";
import Wrapper from "../../hoc/wrapper";

const Layout = (props)=>{
    return(
        <Wrapper>
            <main>{props.children}</main>
        </Wrapper>
    )
}

export default Layout;