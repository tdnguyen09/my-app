import React, { useContext, useState } from "react";
import ProductItem from "./ProductItem";
import SearchResultList from "./SearchResultList";
import "./SearchResultList.css";
import { FaSearch } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

function ProductList () {
    const cart = useContext(CartContext);
    const [input, setInput] = useState('');
    let searchResult = cart.allToyDatas.filter((toy) => {
        return (
            input &&
            toy &&
            toy.name &&
            toy.name.toLowerCase().includes(input)
        )
    })

    function handleSearchChange(event){
     setInput(event.target.value)
    }

    return (
        <div className="product">
            <div className="searchInput-container">
                <div className="input-wrapper">
                    <input type="text" name="toys-name" onChange={handleSearchChange} value={input} placeholder="Search" />
                    <FaSearch id="search-icon" />
                </div>
                <div className="display-search-list">
                    <SearchResultList searchResult={searchResult}/>
                </div>
            </div>   
            <div>       
                <h2>TOYS</h2>
                <div className="toy-item-list">
                    {cart.allToyDatas.map((toy) => (
                        <div className="toy-item">
                        <ProductItem 
                            id={toy.id}
                            key={toy.id}
                            image={toy.image}
                            name={toy.name}
                            price={toy.price}
                            clearance={ toy.clearance ? <p>Save {toy.discount}</p> : null } />
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductList ;