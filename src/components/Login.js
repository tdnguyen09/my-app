import React from "react";

function Login(){
    return (
        <div className="login">
            <h2>SIGN IN</h2>
            <p>Please sign in to your account to enjoy member-only benefits.</p>
            <form className="login-form">
                <label for='email'><strong>Email</strong></label>
                <input type="email" name="email" id="email" required/>
                <a href="">Forgot email</a>
                <label for="password"><strong>Password</strong></label>
                <input type="password" name="password" id="password" required />
                <a href="">Forgot password</a>
                <button type="submit">Sign in</button>
            </form>
        </div>
    )
}

export default Login;