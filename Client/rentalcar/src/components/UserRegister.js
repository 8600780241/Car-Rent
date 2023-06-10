import React, { useState } from 'react'
import image from './backImage.png'
import { Link } from 'react-router-dom';

export default function UserRegister() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [numberError, setNumberError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
    function registerhandle(e) {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(number)
        console.log(password)
        console.log(confirmPassword)
    }
    function nameHandler(e) {
        if (e.target.value.length < 3) {
            setNameError(true)
        } else {
            setNameError(false)
        }
        setName(e.target.value)
    }
    function emailHandler(e) {
        let text = e.target.value;
        if (text.includes("@")) {
            setEmailError(false)
        } else {
            setEmailError(true)
        }
        setEmail(text)
    }
    function numberHandler(e) {
        let text = e.target.value;
        if (text.length > 10) {
            setNumberError(true)
        } else {
            setNameError(false)
        }
        setNumber(text)
    }
    function passwordHandler(e) {
        let text = e.target.value;
        if (text.includes("@") && text.length > 3) {
            setPasswordError(false)
        } else {
            setPasswordError(true)
        }
        setPassword(text)
    }
    function confirmPasswordHandler(e) {
        let text = e.target.value;
        if (text === password) {
            setConfirmPasswordError(false)
        } else {
            setConfirmPasswordError(true)
        }
        setConfirmPassword(text)
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
                            <form onSubmit={registerhandle}>
                                <input type='text' className='input2' placeholder='Name' onChange={nameHandler} value={name} />{nameError ? <span>must more than 3 letters</span> : ""}<br></br>
                                <input type='email' className='input2' placeholder='Email' onChange={emailHandler} value={email} />{emailError ? <span>email not valid</span> : ""}<br></br>
                                <input type='number' className='input2' placeholder='Contact' onChange={numberHandler} value={number} />{numberError ? <span>mo. No. not valid</span> : ""}<br></br>
                                <input type='password' className='input2' placeholder='password' onChange={passwordHandler} value={password} />{passwordError ? <span>password not valid</span> : ""} <br></br>
                                <input type='password' className='input2' placeholder='confirm password' onChange={confirmPasswordHandler} value={confirmPassword} />{confirmPasswordError ?  <span>password not Matched</span> : "" }<br></br>
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