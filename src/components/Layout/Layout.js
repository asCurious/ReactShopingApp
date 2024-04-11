import React from "react";
import Wrapper from "../../hoc/wrapper";
import "./Layout.css"

const Layout = (props)=>{
    return(
        <Wrapper>
            <main className="content">{props.children}</main>
        </Wrapper>
    )
}

export default Layout;