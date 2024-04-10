import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { CartContext } from "../context/CartContext";

function ProductDetails () {
    const [displayToy, setDisplayToy] = useState('');
    const { id } = useParams()
    const cart = useContext(CartContext)
    const quantityToy = cart.getItemQuantity(displayToy.id)

    useEffect(() => {
        fetch(`http://localhost:8000/toys/${id}`)
        .then(res => res.json())
        .then(data => setDisplayToy(data))
    },[id])

    return(
        <div className="display-toy">
            <div className="display-image">
                <img src={displayToy.image} alt="toy-image" />
            </div>
            <div className="toy-infomation">
                <h2>{displayToy.name}</h2>
                <p>{displayToy.price}</p>
                {displayToy.clearance ? <p>Save {displayToy.discount}</p> : null }
                { quantityToy > 0 ?
                <>  <p>Quantity: {quantityToy} </p>
                    <button onClick={() => cart.addToCart(displayToy.id)}>+</button>
                    <button onClick={() => cart.removeOneFromCart(displayToy.id)}>-</button>
                    <button onClick={() => cart.removeFromCart(displayToy.id)}>Remove From Cart</button>
                </>
                : <button onClick={() => cart.addToCart(displayToy.id)}>Add to Cart</button>
                }
            </div>
        </div>
    )
}

export default ProductDetails;
