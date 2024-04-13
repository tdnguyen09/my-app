import React, { useState, useEffect } from "react";

const CartContext = React.createContext()

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [datas, setData] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUsername] = useState('')
    
    useEffect(() => {
        fetch("https://json-server-31ga.onrender.com/toys")
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
    
    function deleteCart(){
        setCartItems([]);
    }

    function login(username){
        setIsLogin(true);
        setUsername(username);
    }
    function logout(){
        setIsLogin(false);
        setUsername('');
    }
        

    const contextValue ={
        items: cartItems,
        allToyDatas: datas,
        isLogin: isLogin,
        username: username,
        login,
        logout,
        getItemQuantity,
        addToCart,
        removeFromCart,
        removeOneFromCart,
        totalQuantity,
        deleteCart,
    }


    return (
    <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
    )
}

export { CartContext, CartProvider };