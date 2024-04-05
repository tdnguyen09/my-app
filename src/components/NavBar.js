import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className="navbar">
            <NavLink to="/">ATOK TOY SHOP</NavLink>
            <NavLink to="/products">Toys</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
            <NavLink to="/cart">
                <img src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg" alt="cart-icon" style={{width:'30px'},{height:'30px'}} />
            </NavLink>
        </div>
    )
}

export default NavBar;