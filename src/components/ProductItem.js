import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ProductItem({ image, name, price, clearance, id }){
    return (  
            <div className="toy-item" >
                <Link to={`/products/${id}`}>
                    <img src={image}  alt="toy-name" />
                    <h4>{name}</h4>
                </Link>
                <p>{price}</p>
                <p>{clearance}</p>
                <button>Add to cart</button>
            </div>
    )
}

export default ProductItem;