import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div>
            <NavLink to="/">ATOK TOY SHOP</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign up</NavLink>

        </div>
    )
}

export default NavBar;