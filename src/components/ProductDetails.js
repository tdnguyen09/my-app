import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function ProductDetails () {
    const [displayToy, setDisplayToy] = useState('');
    const { id } = useParams()

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
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductDetails;