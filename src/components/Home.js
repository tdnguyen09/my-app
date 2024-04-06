import React, { useEffect, useState } from "react";

function Home(){
  const [items, setItems] = useState([])

    // useEffect(() => {
    //     fetch("http://localhost:8000/toys")
    //     .then(res => res.json())
    //     .then((toys) => {
    //         setItems(toys)
    //     })
    // },[])

    return (
        <div id="home">
            <img src="https://as1.ftcdn.net/v2/jpg/04/76/79/70/1000_F_476797090_GD9J6JoeR956o2yXxMBEqQEw0xnlgAx5.jpg" alt="toy-background" />
            
    
        </div>
    )
}

export default Home;