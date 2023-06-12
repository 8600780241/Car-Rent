import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from './backImage.png'
import './AdminRegister.css';
import { Link } from 'react-router-dom';

export default function AdminRegister() {

    const [formData, setFormaData] = useState({
        name: "",
        email: "",
        contact: "",
        password: ""
    })

    const navigate = useNavigate()

    function setFormValues(e) {
        setFormaData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    console.log(formData)
    async function submitForm(e) {
        e.preventDefault()

        fetch("http://localhost:8080/admin/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .then(navigate('/admin/signIn'))
    }
    return (
        <div className='page-container'>
            <div id='logo'>Logo</div>
            <div className='register' id='first' style={{ backgroundImage: `url(${image})` }}>
                <div className='quotes' id='quotes'>
                    <p> All you needed was a  wheel</p>
                    <p>in Your hand and four on</p>
                    <p>the road.</p>
                    <div>
                        <Link to="/admin/signIn">
                            <div id='admin-nav'>
                            Admin Sign In
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="form-container" id='forma'>
                    <form onSubmit={submitForm} encType='multipart/form-data'>
                        <p id='head-text'>Register in your Account</p>
                        <input
                            id='name'
                            type="text"
                            placeholder="Name"
                            name="name" required
                            onChange={setFormValues}
                            value={formData.name}
                        />

                        <input
                            className='email'
                            type="text"
                            name='email'
                            placeholder="Email"
                            required value={formData.email}
                            onChange={setFormValues}
                        />

                        <input
                            className='contact'
                            type="text"
                            placeholder="Contact" required
                            name='contact'
                            value={formData.contact} onChange={setFormValues}
                        />

                        <input
                            className='password'
                            type="text"
                            placeholder="Password" required
                            name='password'
                            value={formData.password} onChange={setFormValues}
                        />

                        <button id="btn" type="submit">Register</button>

                    </form>
                </div>
            </div>
        </div>
    )
}