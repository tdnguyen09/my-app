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
        return total
    }
    console.log (cart.items)
    console.log(totalCost())
    return (
        <div className="cart">
            <h2>Your shopping cart</h2>
            { totalCartQuantity > 0 ? 
            <div>
                {cart.items.map((item) => (
                    <table>
                        <tr>
                            <th className="item-col-name">Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                        <tr key={item.id}>
                            <td className="item-col-name">
                                {item.name}
                                <button onClick={() => cart.addToCart(item.id)}>+</button>
                                <button onClick={() => cart.removeOneFromCart(item.id)}>-</button>
                            </td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    </table>
                    ))
                }
            </div>
            : <p>There is no item in the cart</p>   
        }   
                
              
            
            <p>Total: $ {totalCost()} </p>
            <p>total quantity : {totalCartQuantity}</p>
        </div>
    )
}

export default Cart;