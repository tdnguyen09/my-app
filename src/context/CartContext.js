import React, { useState, useEffect } from "react";

const CartContext = React.createContext()

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [datas, setData] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:8000/toys")
        .then(res => res.json())
        .then((toys) => {
           setData(toys)
        })
    },[])
    function getItemQuantity(index) {
        const item = cartItems.find(item => item.id === index)
        return item ? item.quantity : 0 ;
    }

    function addToCart (index) {   
        let quantity = getItemQuantity(index);
        let toyData = datas.find(data => data.id === index)
        if (quantity === 0) {
            setCartItems( [
                ...cartItems,
                {
                    id: index,
                    price: toyData.price,
                    name: toyData.name,
                    image: toyData.image,
                    quantity: 1,
                }
            ])
        } else  {
            setCartItems(cartItems.map((item) => {
                if (item.id === index) {
                    return { ...item, quantity: item.quantity + 1}
                } else {
                    return item;
                }
            }))
        }
    }

    function removeFromCart (index) {
        const updatedCartItems = cartItems.filter((item) => item.id !== index);
        setCartItems(updatedCartItems)
    }
    
    function removeOneFromCart(index) {
        let quantity = getItemQuantity(index)
        if (quantity === 1 ){
            removeFromCart(index);
        } else {
            setCartItems(cartItems.map((item) => {
                if(item.id === index) {
                    return { ...item, quantity: item.quantity - 1}
                }else {
                    return item;
                }
            }))
        }
    }

    function totalQuantity (){
        let totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
        return totalQuantity
    }
        

    const contextValue ={
        items: cartItems,
        allToyDatas: datas,
        getItemQuantity,
        addToCart,
        removeFromCart,
        removeOneFromCart,
        totalQuantity,
    }


    return (
    <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
    )
}

export { CartContext, CartProvider };