import React from 'react';
import background from '../../images/self-drive-norwa-car-people.png'
import './AdminSignIn.css'
import { Link } from 'react-router-dom';

export default function AdminSignIn(){

    function submitForm(e){
        e.preventDefault()
    }

    return<div>
        <header className='header'>
            <p>LOGO</p>
        </header>
        <div className='landing' style={{ backgroundImage:`url(${background})` }}>
            <div className='form-container'>
                <p>Sign in your Account</p>
                <form onSubmit={submitForm}>
                    <input type='text' placeholder='Phone/Email'/>
                    <input type='text' placeholder='Password'/>
                    <p id='text'>Forget password?</p>
                    <button id='btn' type='submit'>SIGN IN</button>
                </form>
                <p id='create'>Create Account</p>
            </div>
            <div className='quote'>
                <p> All you needed was a  wheel</p>
                <p>in Your hand and four on</p>
                <p>the road.</p>
            </div>
            <div className='nav'>
            <Link to={'/'}>
                    User Sign In
                </Link>
            </div>
        </div>
        </div>
}