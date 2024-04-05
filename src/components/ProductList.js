import React, { useEffect, useState } from "react";
import { Link, Route, useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProductDetails from "./ProductDetails";
import ProductItem from "./ProductItem";

function ProductList () {
    const [toys, setToys] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:8000/toys")
        .then(res => res.json())
        .then((toys) => {
            setToys(toys)
        })
    },[])
    let newArrivalToys = toys.filter((toy) => toy.new === true);
    let clearanceToys = toys.filter((toy) => toy.clearance === true);
    function handleSearchChange(event){
     setToys(event.target.value)
    }
    return (
        <div className="product">
            <input type="text" name="toys-name" onChange={handleSearchChange} value={toys} placeholder="Search" />
            <div className="new-arrival">
                <h2>NEW ARRIVAL</h2>
                <div className="toy-item-list">
                    {newArrivalToys.map((toy) => (
                        <ProductItem 
                        id={toy.id}
                        key={toy.id}
                        image={toy.image}
                        name={toy.name}
                        price={toy.price}
                        clearance={ toy.clearance ? <p>Save {toy.discount}</p> : null } />
                    ))
                    }
                </div>
            </div>
            <div className="clearance">
                <h2>CLEARANCE</h2>
                <div className="toy-item-list">
                    {clearanceToys.map((toy) => (
                        <ProductItem 
                        id={toy.id}
                        key={toy.id}
                        image={toy.image}
                        name={toy.name}
                        price={toy.price}
                        clearance={ toy.clearance ? <p>Save {toy.discount}</p> : null } />
                    )
                    )}
                </div>
            </div>
            <div className="all-toys">
                <h2>TOYS</h2>
                <div className="toy-item-list">
                    {toys.map((toy) => (
                        <ProductItem 
                        id={toy.id}
                        key={toy.id}
                        image={toy.image}
                        name={toy.name}
                        price={toy.price}
                        clearance={ toy.clearance ? <p>Save {toy.discount}</p> : null } />
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductList;