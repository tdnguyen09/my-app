import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ProductItem({ image, name, price, clearance, id }){
    return (  
            <>
                <Link to={`/products/${id}`}>
                    <img src={image}  alt="toy-name" />
                    <h4>{name}</h4>
                    <p>$ {price}</p>
                    <p>{clearance}</p>
                </Link>
            </>
    )
}

export default ProductItem;