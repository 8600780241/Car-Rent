import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from './backImage.png'
import { Link } from 'react-router-dom';
import './AdminRegister.css'
import './UserRegister.css'


export default function AdminRegister() {
  const [formData, setFormaData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmpassword: ""
  })

  const navigate = useNavigate()

  function setFormValues(e) {
    setFormaData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  async function submitForm(e) {
    e.preventDefault()
    console.log(formData)

    let res = fetch("http://localhost:8000/user/registerUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      }
      )
      .catch((err) => {throw new err})

  }
  function register() {
    navigate("/")
  }
  return (
    <div >
      <div id='logo'>Logo</div>

      <div className='register' style={{ backgroundImage: `url(${image})` }}>
        <div className='text'>All you needed was a wheel in Your hand and four on the road.</div>
        <div className="form-container1">
          <form onSubmit={submitForm} encType='multipart/form-data'>
            <p id='head-text1'>Register in your Account</p>
            <input
              id='name'
              type="text"
              placeholder="Name"
              name="name" required
              onChange={setFormValues}
              value={formData.name}
            /><br></br>

            <input
              className='email'
              type="text"
              name='email'
              placeholder="Email"
              required value={formData.email}
              onChange={setFormValues}
            /><br></br>

            <input
              className='contact'
              type="text"
              placeholder="Contact" required
              name='contact'
              value={formData.contact} onChange={setFormValues}
            /><br></br>

            <input
              className='password'
              type="text"
              placeholder="Password" required
              name='password'
              value={formData.password} onChange={setFormValues}
            /><br></br>

            <input
              className='confirmPassword'
              type="text"
              placeholder="confirmPassword" required
              name='confirmpassword'
              value={formData.confirmpassword} onChange={setFormValues}
            />

            <button id="btn" type="submit" onClick={register}>Register</button>

          </form>
          <Link to='/'><p className='sign-btn1' >Sign In</p></Link>
        </div>
      </div>
    </div>
  )
}

