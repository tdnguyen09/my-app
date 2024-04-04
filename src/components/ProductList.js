import React, { useEffect, useState } from "react";

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
                    {newArrivalToys.map((toy) => {
                        return(
                        <div className="toy-item" key={toy.id}>
                            <img src={toy.image} alt="toy-name" />
                            <h4>{toy.name}</h4>
                            <p>{toy.price}</p>
                            <button>Add to cart</button>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className="clearance">
                <h2>CLEARANCE</h2>
                <div className="toy-item-list">
                    {clearanceToys.map((toy) => {
                        return (
                            <div className="toy-item" key={toy.id}>
                                <img src={toy.image} alt="toy-name" />
                                <h4>{toy.name}</h4>
                                <p>{toy.price}</p>
                                <p>Save {toy.discount}</p>
                                <button>Add to cart</button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="all-toys">
                <h2>TOYS</h2>
                <div className="toy-item-list">
                    {toys.map((toy) => {
                        return (
                            <div className="toy-item" key={toy.id}>
                                <img src={toy.image}  alt="toy-name" />
                                <h4>{toy.name}</h4>
                                <p>{toy.price}</p>
                                {toy.clearance ? <p>Save {toy.discount}</p> : null }
                                <button>Add to cart</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductList;