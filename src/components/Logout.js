import React, { useContext, useState } from "react";
import Cart from "./Cart";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { CartContext } from "../context/CartContext";

function Logout () {
    const cart = useContext(CartContext)
    const history = useHistory()
    function handleClick(){
        cart.logout()
        cart.deleteCart();
        history.push('/login');
    }
    return (
        <div className="the-user-information">
                    <h2>Hello{cart.username}</h2>
                    <Cart />
                    <button onClick={handleClick}>LOG OUT</button>
        </div>
    )
}

export default Logout;