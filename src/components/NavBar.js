import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function NavBar(){
    const cart = useContext(CartContext);
    
    return (
        <div className="navbar">
            <NavLink to="/">ATOK TOY SHOP</NavLink>
            <NavLink to="/products">Toys</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
            <NavLink to="/cart">
                <div className="nav-cart">
                    <img src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg" alt="cart-icon" style={{width:'30px'},{height:'30px'}} />
                </div>
            </NavLink>
        </div>
    )
}

export default NavBar;