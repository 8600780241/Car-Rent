import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import image from './backImage.png'
export default function Landing() {
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [userError,setUserError] = useState(false);
    const [userPassword,setUserPassword] = useState(false);
 function signInHandler(e) {
    e.preventDefault();
    // console.log(user)
    // console.log(password)
 }
 function userHandler(e) {
    let text = e.target.value;
    if(text.includes("@") || text.length > 3) {
        setUserError(false);
    } else {
        setUserError(true)
    }
    setUser(text)
 }

 function passwordHandler(e) {
    let text = e.target.value;
    if(text.includes("#") || text.includes("@") || text.length > 6) {
        setUserPassword(false)
    } else {
        setUserPassword(true)
    }
    setPassword(text)
 }
    return (<div className='landing'>
        <div id='logo'>Logo</div>
        <div className='register' style={{ backgroundImage: `url(${image})` }}>
            <div className='signInPart1'>
                <div className='textPart1'>All you needed was a wheel in Your hand and four on the road.
                    <div id='route'>
                       <Link to="/userRegister"><div id='rRoute'>Register</div></Link> 
                       <Link to="/admin/signIn" ><div id='aRoute'>Admin Login</div></Link> 
                    </div> 
                </div>
                <div className='blockPart1'>
                    <p>Sign in your Account</p>
                    <form onSubmit={signInHandler}>
                        <input type='text' className='input1' placeholder='  Phone/Email' onChange={userHandler} value={user}/>{userError?<span>atleast 4 letters</span>:""}<br></br>
                        <input type='password' className='input1' placeholder='  Password' onChange={passwordHandler} value={password}/>{userPassword?<span>not valid</span>:""}
                        <p id='forgetPassword'>Forget Password?</p>
                        <button className='signInbutton' type='submit'>SIGN IN</button>
                        <Link to="/userRegister"><p id='createAccount'>Create Account</p></Link>
                    </form>
                </div>
            </div>
        </div>
    </div>)
}