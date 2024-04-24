import React from "react";
import NavItem from "../NavItem/NavItem";
import "./NavItems.css"

const NavItems = ()=>{
    return(
        <ul className="nav-items">
            <NavItem link="/">فروشگاه</NavItem>
            <NavItem link="/">تسویه</NavItem>
        </ul>
    )
}

export default NavItems;