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
    const [showPassword, setShowPassword] = useState(false)

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
        setShowPassword(!showPassword)
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
        setEmail('');
        setPassword('');
        setFormData({
            firstname:"",
            lastname:"",
            dob:"",
            address:""
        });
        alert('Success');
    }
    return (
        <div className="sign-up">
            <div className="sign-up-header">
                <h2><strong>Become a member</strong></h2>
                <p>Become a Member - you'll enjoy exclusive deals, offers, invites and rewards</p>
            </div>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <label for="email-sign-up">Email</label>
                <input type="email" name="email-sign-up" id="email-sign-up" onChange={handleEmailChange} value={email} required />
                <label for="password-sign-up">Create a password</label>
                <input type={showPassword ? "text" : "password"} name="password-sign-up" id="password-sign-up" value={password} onChange={handlePasswordChange} required />
                <span className="span-container">   
                    <input type="checkbox" name="show-password" onClick={passwordVisibility} />
                    <p>Show Password</p>
                </span>    
                <label for="firstname">First Name</label>
                <input type="text" name="firstname" id="firstname" onChange={handleChange} value={formData.firstname} required />
                <label for="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname" onChange={handleChange} value={formData.lastname} required />
                <label for="dob">Date of birth</label>
                <input type="date" id="dob" name="dob" onChange={handleChange} value={formData.dob} required/>
                <label for="address">Address</label>
                <input type="text" name="address" id="address" onChange={handleChange} value={formData.address} required />
                <span className="span-container">
                    <input type="checkbox" name="send-notification" onChange={handleChange} value={formData.notification}/>
                    <p>By clicking "Sign Up", I agree to the Membership Terms and conditions</p>
                </span>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;