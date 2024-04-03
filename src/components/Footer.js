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
        setEmailSubcribe('')
    }
    function handleSubcribleChange(event){
        setEmailSubcribe(event.target.value)
    }
    return (
        <div className="footer">
            <div className="social-media">
                <p>LINKS</p>
                <div className="social-media-links">
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png?20210403190622" alt="ATOK TOY SHOP instagram" />
                    </a>
                    <a href="https://twitter.com/?lang=en" target="_blank">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-black-icon.png" alt="ATOK TOY SHOP" />
                    </a> 
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/384px-Facebook_icon.svg.png" alt="ATOK facebook" />
                    </a>
                </div>
            </div>
            <div className="subscribe-letter">
                <p>Join Our Newletter</p>
                <form className="subscribe-form" onSubmit={handleSubmitSubscribe}>
                    <input type="email" id="subscribe" name="subsribe" placeholder="Enter your email address.." onChange={handleSubcribleChange} value={emailSubscribe} />
                    <button type="submit">Subscribe</button>
                </form> 
            </div>
        </div>
    )
}

export default Footer;