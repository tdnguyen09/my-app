import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductItem from "./ProductItem";

function Home(){
    const cart = useContext(CartContext);
    let newArrivalToys = cart.allToyDatas.filter((toy) => toy.new === true);
    let clearanceToys = cart.allToyDatas.filter((toy) => toy.clearance === true);
    return (
        <div id="home">
            <div className="pictures">
            </div>
            <div className="home-products-container">
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
            </div>
    
        </div>
    )
}

export default Home;