import React from "react";

function Login(){
    return (
        <div className="login-form">
            <form>
                <label for='username'>Username</label>
                <input type="text" name="username" id="username" required/>
                <label for="password">Password</label>
                <input type="password" name="password" id="password" required />
            </form>
        </div>
    )
}

export default Login;