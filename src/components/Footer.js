import React from "react";

function Footer(){
    return (
        <div className="footer">
            <p>LINKS</p>
            <a href="https://www.instagram.com/" target="_blank">
                <img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png" alt="ATOK TOY SHOP instagram" />
                <p>instagram</p>
            </a>
            <a href="https://twitter.com/?lang=en" target="_blank">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-black-icon.png" alt="ATOK TOY SHOP" />
                <p>X</p>
            </a>
            <p>Join Our Newletter</p>
            <form className="subscribe-form">
                <input type="email" id="subscribe" name="subsribe" placeholder="Enter your email address.." />
                <button type="submit">Subscribe</button>
            </form> 
        </div>
    )
}

export default Footer;