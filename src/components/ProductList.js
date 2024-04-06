import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import SearchResultList from "./SearchResultList";
import "./SearchResultList.css";
import { FaSearch } from "react-icons/fa";

function ProductList () {
    const [toys, setToys] = useState([]);
    const [input, setInput] = useState('');
    useEffect(() => {
        fetch("http://localhost:8000/toys")
        .then(res => res.json())
        .then((toys) => {
            setToys(toys)
        })
    },[])
    let newArrivalToys = toys.filter((toy) => toy.new === true);
    let clearanceToys = toys.filter((toy) => toy.clearance === true);
    let searchResult = toys.filter((toy) => {
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
    console.log(input)
    console.log(searchResult)

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
            <div className="new-arrival">
                <h2>NEW ARRIVAL</h2>
                <div className="toy-item-list">
                    {newArrivalToys.map((toy) => (
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
            <div className="clearance">
                <h2>CLEARANCE</h2>
                <div className="toy-item-list">
                    {clearanceToys.map((toy) => (
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
            <div className="all-toys">
                <h2>TOYS</h2>
                <div className="toy-item-list">
                    {toys.map((toy) => (
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

export default ProductList;