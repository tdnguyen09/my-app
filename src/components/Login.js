import React, { useState } from "react";
import Cart from "./Cart";


function Login(){
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false);
    const [username, displayUsername] = useState('')

    function loginEmailChange(e){
        setLoginEmail(e.target.value)
    }
    function loginPasswordChange(e){
        setLoginPassword(e.target.value)
    }

    function loginSubmit(event){
        event.preventDefault();
        const userLogin = {
            email: loginEmail,
            password: loginPassword
        }
        fetch('http://localhost:8000/logininfo', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(userLogin),
        })
        .then(res => res.json())
        .then(res => displayUsername(res.email))
        setLoginEmail('')
        setLoginPassword('')
        setIsLogin(true)
    }
    return (
        <>
            {
                (isLogin) ? 
                <div className="the-user-information">
                    <h2>Hello {username}</h2>
                    <Cart />
                </div>
            :
            <div className="login">
            <h2>SIGN IN</h2>
            <p>Please sign in to your account to enjoy member-only benefits.</p>
            <form className="login-form" onSubmit={loginSubmit}>
                <label for='email'><strong>Email</strong></label>
                <input type="email" name="email" id="email" required value={loginEmail} onChange={loginEmailChange}/>
                <a href="">Forgot email</a>
                <label for="password"><strong>Password</strong></label>
                <input type="password" name="password" id="password" required value={loginPassword} onChange={loginPasswordChange}/>
                <a href="">Forgot password</a>
                <button type="submit">Sign in</button>
            </form>
            </div>
            }
        </>
    )
}

export default Login;