import React, { useState } from 'react';
import background from '../images/self-drive-norwa-car-people.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Landing.css'

export default function Landing() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [errorMessage, setErrorMessage] = useState("")

   function setForm(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    function takeToCreateAdmin(e){
        navigate("/userRegister")
    }

    function submitForm(e) {
        e.preventDefault()

      fetch("http://localhost:8080/user/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.data)
        navigate('/booking')
      })
      .catch(err => {
        setErrorMessage(err.message)
      })
      console.log(errorMessage)
    }

    return <div>
        <header className='header'>
            <p>LOGO</p>
        </header>
        <div className='landing' style={{ backgroundImage: `url(${background})` }}>
            <div className='form-container'>
                <p id="head">Sign in your Account</p>
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
                <div>
                <Link to={'/'} style={{ textDecoration: "none" }}>
                    <div className='btn-text'>
                    User Sign In
                    </div>
                </Link>
                </div>
                <div>
                <Link to={'/admin/signIn'} style={{ textDecoration: "none" }}>
                    <div className='btn-text btx'>
                    Admin Sign In
                    </div>
                </Link>
                </div>
                
            </div>
        </div>
    </div>
}
