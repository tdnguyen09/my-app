import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart () {
    const cart = useContext(CartContext)
    let totalCartQuantity = cart.totalQuantity()
    
    function totalCost () {
        let total = 0;
        cart.items.map((item) => {
            total += (item.price * item.quantity)
        })
        return total.toFixed(2)
    }
    return (
        <div className="cart">
            <h2>Your shopping cart</h2>
            <div>
                {totalCartQuantity > 0 ? 
                <table>
                    <tr>
                        <th className="item-col-name">Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                    {cart.items.map((item) => (
                        <tr key={item.id}>
                            <td className="item-col-name">
                                {item.name}
                                <button className="cart-btn" onClick={() => cart.addToCart(item.id)}>+</button>
                                <button className="cart-btn" onClick={() => cart.removeOneFromCart(item.id)}>-</button>
                            </td>
                            <td>$ {item.price}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </table>
                : <p>There is no item in the cart</p>  
                }
                <p style={{fontSize:'20px'}}><strong>Total: $ {totalCost()}</strong> </p>
            </div>
        </div>
    )        
}

export default Cart;