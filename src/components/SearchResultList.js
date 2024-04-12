import React from "react";
import ProductItem from "./ProductItem";
import "./SearchResultList.css";

function SearchResultList({ searchResult }){
    return (
        <div className="search-result-list">
            {searchResult.map((searchToy) => (
                <div className="display-searchToy">
                    <ProductItem 
                            id={searchToy.id}
                            key={searchToy.id}
                            image={searchToy.image}
                            name={searchToy.name}
                            price={searchToy.price}
                            clearance={ searchToy.clearance ? <p>Save $ {searchToy.discount}</p> : null } />
                </div>
            ))}
        </div>
    )
}

export default SearchResultList;