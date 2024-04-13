import React, { useContext,  useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { CartContext } from "../context/CartContext";

function Login(){
    const cart = useContext(CartContext);
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const history = useHistory();

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
        fetch('https://json-server-31ga.onrender.com/logininfo', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(userLogin),
        })
        .then(res => res.json())
        .then(res => console.log(res))
        cart.login(loginEmail);
        history.push('/logout')
    }
    return (
        <div className="login">
            <h2>SIGN IN</h2>
            <p>Please sign in to your account to enjoy member-only benefits.</p>
            <form className="login-form" onSubmit={loginSubmit} >
                <label for='email'><strong>Email</strong></label>
                <input type="email" name="email" id="email" required value={loginEmail} onChange={loginEmailChange}/>
                <p>Forgot email</p>
                <label for="password"><strong>Password</strong></label>
                <input type="password" name="password" id="password" required value={loginPassword} onChange={loginPasswordChange}/>
                <p>Forgot password</p>
                <button type="submit">Sign in</button>
            </form>
        </div>
    )
}

export default Login;