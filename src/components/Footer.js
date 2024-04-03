import React, { useState } from "react";

function Footer(){
    const [emailSubscribe, setEmailSubcribe] = useState([])
    function handleSubmitSubscribe(event){
        event.preventDefault();
        const newEmailSubcribe = {
            emailSubscribe: emailSubscribe
        };
        fetch('http://localhost:8000/subscribe', {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newEmailSubcribe),
        })
        .then((res) => res.json())
        .then((emailSubscribed) => console.log(emailSubscribed))
    }
    function handleSubcribleChange(event){
        setEmailSubcribe(event.target.value)
    }
    return (
        <div className="footer">
            <div className="social-media">
                <p>LINKS</p>
                <a href="https://www.instagram.com/" target="_blank">
                    <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" alt="ATOK TOY SHOP instagram" />
                    <p>instagram</p>
                </a>
                <a href="https://twitter.com/?lang=en" target="_blank">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-black-icon.png" alt="ATOK TOY SHOP" />
                    <p>X</p>
                </a>
            </div>
            <p>Join Our Newletter</p>
            <form className="subscribe-form" onSubmit={handleSubmitSubscribe}>
                <input type="email" id="subscribe" name="subsribe" placeholder="Enter your email address.." onChange={handleSubcribleChange} value={emailSubscribe} />
                <button type="submit">Subscribe</button>
            </form> 
        </div>
    )
}

export default Footer;