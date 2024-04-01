import React, { useState } from "react";

function SignUp () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        dob:"",
        address:""
    })

    function handleEmailChange(event){
        setEmail(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleChange(event) {
        let name = event.target.name
        let value = event.target.value

        if(event.target.type === "checkbox"){
            value = event.target.checked;
        }

        setFormData({
            ...formData,
            [name]: value,        
        })
    }

    function passwordVisibility(){

    }


    function handleSubmit(event){
        event.preventDefault();
        const userData = { 
            email: email,
            password: password,
            firstname: formData.firstname,
            lastname: formData.lastname,
            dob: formData.dob,
            address: formData.address,
            notification: formData.notification
        };
        fetch("http://localhost:8000/userinfo",{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((res)=> res.json())
            .then((userData) => console.log(userData))

    }
    return (
        <form className="sign-up-form" onSubmit={handleSubmit}>
            <h4><strong>Become a member</strong></h4>
            <p>Become a Member - you'll enjoy exclusive deals, offers, invites and rewards</p>
            <label for="email-sign-up">Email</label>
            <input type="email" name="email-sign-up" id="email-sign-up" onChange={handleEmailChange} value={email} required />
            <label for="password-sign-up">Create a password</label>
            <input type="password" name="password-sign-up" id="password-sign-up" value={password} onChange={handlePasswordChange} required />
            <input type="checkbox" name="show-password" onClick={passwordVisibility} />Show Password
            <label for="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" onChange={handleChange} value={formData.firstname} required />
            <label for="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" onChange={handleChange} value={formData.lastname} required />
            <label for="dob">Date of birth</label>
            <input type="date" id="dob" name="dob" onChange={handleChange} value={formData.dob} required/>
            <label for="address">Address</label>
            <input type="text" name="address" name="address" onChange={handleChange} value={formData.address} required />
            <input type="checkbox" name="send-notification" onChange={handleChange} value={formData.notification}/>
            <label for="send-notification" id="send-notification">By clicking "Sign Up", I agree to the Membership Terms and conditions</label>
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUp;