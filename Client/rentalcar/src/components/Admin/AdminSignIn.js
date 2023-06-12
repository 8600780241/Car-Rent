import React, { useState } from 'react';
import background from '../../images/self-drive-norwa-car-people.png'
import './AdminSignIn.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function AdminSignIn() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

   function setForm(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    function takeToCreateAdmin(e){
        navigate("/adminRegister")
    }

    function submitForm(e) {
        e.preventDefault()

        fetch("http://localhost:8080/admin/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.data)
        navigate('/adminCarList')
      })
    }

    return <div>
        <header className='header'>
            <p>LOGO</p>
        </header>
        <div className='landing' style={{ backgroundImage: `url(${background})` }}>
            <div className='form-container'>
                <p>Sign in your Account</p>
                <form onSubmit={submitForm}>
                    <input
                        type='text'
                        placeholder='Phone/Email'
                        name='email'
                        onChange={setForm}
                        value={formData.email}
                    />
                    <input
                        type='text'
                        placeholder='Password'
                        name='password'
                        onChange={setForm}
                        value={formData.password}
                        />
                    <p id='text'>Forget password?</p>
                    <button id='btn' type='submit'>SIGN IN</button>
                </form>
                <p id='create' onClick={takeToCreateAdmin}>Create Account</p>
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