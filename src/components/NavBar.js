import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

function NavBar(){
    const cart = useContext(CartContext);
    
    return (
        <div className="navbar">
            <NavLink className="no-underline" to="/">ATOK TOY SHOP</NavLink>
            <NavLink className="no-underline" to="/products">Toys</NavLink>
            { cart.isLogin ? 
            <NavLink className="no-underline"to="/logout" ><FaUser /></NavLink>
            : <NavLink className="no-underline"to="/login"><FaUser /></NavLink>
            }
            <NavLink className="no-underline"to="/signup">Sign up</NavLink>
            <NavLink className="no-underline"to="/cart">
                <div className="nav-cart">
                    <FaCartShopping />
                    <div>{cart.totalQuantity()} item(s) </div>
                </div>
            </NavLink>
        </div>
    )
}

export default NavBar;