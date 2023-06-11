import React, { useState } from 'react'
import image from './backImage.png'
import { Link } from 'react-router-dom';


export default function UserRegister() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [number, setNumber] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    // const [nameError, setNameError] = useState(false);
    // const [emailError, setEmailError] = useState(false);
    // const [numberError, setNumberError] = useState(false);
    // const [passwordError, setPasswordError] = useState(false);
    // const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    // async function registerhandle(e) {
    // e.preventDefault()
    //     let formData = new FormData();
    //     formData.append("name",name);
    //     formData.append("email",email);
    //     formData.append("contact",number);
    //     formData.append("password",password);
    //     fetch(`http://localhost:8080/user/register`, {
    //         method: 'POST',
    //         headers: {},
    //         body: formData,
    //       })
    //     .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .then(alert("Post created successfully"))
    //   console.log(formData)
    //     let items = { name, email, number, password };
    //     console.log(items);
    //     let result = await fetch("http://localhost:3000/user/register", {
    //         method: "POST",
    //         body: JSON.stringify(items),
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json",
    //         }
    //     })

    //     result = await result.json();
    //     console.log("result", result)
    // }
    // function nameHandler(e) {
    //     if (e.target.value.length < 3) {
    //         setNameError(true)
    //     } else {
    //         setNameError(false)
    //     }
    //     setName(e.target.value)
    // }
    // function emailHandler(e) {
    //     let text = e.target.value;
    //     if (text.includes("@")) {
    //         setEmailError(false)
    //     } else {
    //         setEmailError(true)
    //     }
    //     setEmail(text)
    // }
    // function numberHandler(e) {
    //     let text = e.target.value;
    //     if (text.length > 10) {
    //         setNumberError(true)
    //     } else {
    //         setNameError(false)
    //     }
    //     setNumber(text)
    // }
    // function passwordHandler(e) {
    //     let text = e.target.value;
    //     if (text.includes("@") && text.length > 3) {
    //         setPasswordError(false)
    //     } else {
    //         setPasswordError(true)
    //     }
    //     setPassword(text)
    // }
    // function confirmPasswordHandler(e) {
    //     let text = e.target.value;
    //     if (text === password) {
    //         setConfirmPasswordError(false)
    //     } else {
    //         setConfirmPasswordError(true)
    //     }
    //     setConfirmPassword(text)
    // }
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        password: "",
        confirmPassword: ""
    })
    const [errorData, setErrorData] = useState("");
    function validate() {
        const { name, email, contact, password, confirmPassword } = formData;
        if (!name || !email || !contact || !password || !confirmPassword) {
            return "All fields are mandatory";
        }
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            return "name isn't alphanumeric"
        }
        if (!(email.includes("@"))) {
            return "email must contain @"
        }
        if (isNaN(contact)) {
            return "phone number must contains numbers"
        }
        if (password.length < 6) {
            return "password must contains atleast 6 letters"
        }
        if(confirmPassword  !== password) {
            return "password doesn't matched"
        }
    }
    function registerhandle(e) {
        e.preventDefault();
        const error = validate();
        if (error) {
            setErrorData(error);
        } else {
            setErrorData();
        }
    }
    return (
        <>
            <div>
                <div id='logo'>Logo</div>
                <div className='register' style={{ backgroundImage: `url(${image})` }}>
                    <div className='regiPart'>
                        <div className='textPart2'>All you needed was a wheel in Your hand and four on the road.</div>
                        <div className='blockPart2'>
                            <p>Register in your Account</p>
                            <form method='POST' onSubmit={registerhandle}>
                                {errorData && <div>{errorData}</div>}
                                <input type='text' className='input2' placeholder='Name' onChange={e => setFormData(data => ({ ...formData, name: e.target.value }))} value={formData.name} /><br></br>
                                <input type='email' className='input2' placeholder='Email' onChange={e => setFormData(data => ({ ...formData, email: e.target.value }))} value={formData.email} /><br></br>
                                <input type='number' className='input2' placeholder='Contact' onChange={e => setFormData(data => ({ ...formData, contact: e.target.value }))} value={formData.contact} /><br></br>
                                <input type='password' className='input2' placeholder='password' onChange={e => setFormData(data => ({ ...formData, password: e.target.value }))} value={formData.password} /> <br></br>
                                <input type='password' className='input2' placeholder='confirm password' onChange={e => setFormData(data => ({ ...formData, confirmPassword: e.target.value }))} value={formData.confirmPassword} /><br></br>
                                <button id="registerButton" type='submit'>Register</button>
                            </form>
                            <Link to="/"><p id="l">Sign In</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}