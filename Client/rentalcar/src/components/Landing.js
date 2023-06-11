import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import image from './backImage.png'
export default function Landing() {
  
    function signInHandler(e) {
        e.preventDefault();
        const error = validate();
        if (error) {
            setErrorData(error);
        } else {
            setErrorData();
        }
    }
    return (<div className='landing'>
        <div id='logo'>Logo</div>
        <div className='register' style={{ backgroundImage: `url(${image})` }}>
            <div className='signInPart1'>
                <div className='textPart1'>All you needed was a wheel in Your hand and four on the road.
                    <div id='route'>

                        <Link to="/userRegister"><div id='rRoute'>Register</div></Link>
                        <Link to="/admin/signIn"><div id='aRoute'>Admin Login</div></Link>
                    </div>

                       <Link to="/userRegister"><div id='rRoute'>Register</div></Link> 
                       <Link to="/admin/signIn" ><div id='aRoute'>Admin Login</div></Link> 
                    </div> 

                </div>
                <div className='blockPart1'>
                    <p>Sign in your Account</p>
                    <form onSubmit={signInHandler}>
                        {errorData && <div>{errorData}</div>}
                        <input type='text' className='input1' placeholder=' Email' onChange={e => setFormData(data => ({ ...formData, email: e.target.value }))} value={formData.email} />
                        <input type='password' className='input1' placeholder='  Password' onChange={e => setFormData(data => ({ ...formData, password: e.target.value }))} value={formData.password} />
                        <p id='forgetPassword'>Forget Password?</p>
                        <button className='signInbutton' type='submit'>SIGN IN</button>
                        <Link to="/userRegister"><p id='createAccount'>Create Account</p></Link>
                    </form>
                </div>
            </div>
        </div>
    </div>)
}