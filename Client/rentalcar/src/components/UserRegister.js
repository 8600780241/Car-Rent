import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from './backImage.png'
import './AdminRegister.css'

export default function AdminRegister() {

  const [formData, setFormaData] = useState({
    name : "",
    email: "",
    contact : "",
    password : ""
  })

  const navigate = useNavigate()

  function setFormValues(e){
    setFormaData({
        ...formData,
        [e.target.name] : e.target.value
    })
  }
  console.log(formData)
  async function submitForm(e) {
    e.preventDefault()

    fetch("sample", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(alert("Post created successfully"))
  }
  return (
    <div >
        <div id='logo'>Logo</div>
        
        <div className='register' style={{ backgroundImage: `url(${image})` }}>
        <div className="form-container">
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

          <input
            className='confirmPassword'
            type="text"
            placeholder="Password" required
            value={formData.password}
          />

          <button id="btn" type="submit">Post</button>

        </form>
      </div>
        </div>
    </div>
  )
}

