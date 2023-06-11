// import React, { useState } from 'react'
// import image from './backImage.png'
// import { Link } from 'react-router-dom';



// export default function UserRegister() {
 
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         contact: "",
//         password: "",
//         confirmPassword: ""
//     })
//     const [errorData, setErrorData] = useState("");
//     function validate() {
//         const { name, email, contact, password, confirmPassword } = formData;
//         if (!name || !email || !contact || !password || !confirmPassword) {
//             return "All fields are mandatory";
//         }
//         if (!/^[a-zA-Z\s]+$/.test(name)) {
//             return "name isn't alphanumeric"
//         }
//         if (!(email.includes("@"))) {
//             return "email must contain @"
//         }
//         if (isNaN(contact)) {
//             return "phone number must contains numbers"
//         }
//         if (password.length < 6) {
//             return "password must contains atleast 6 letters"
//         }
//         if(confirmPassword  !== password) {
//             return "password doesn't matched"
//         }
//     }
//     function registerhandle(e) {
//         e.preventDefault();
//         const error = validate();
//         if (error) {
//             setErrorData(error);
//         } else {
//             setErrorData();
//         }
//     }
  
//     return (
//         <>
//             <div>
//                 <div id='logo'>Logo</div>
//                 <div className='register' style={{ backgroundImage: `url(${image})` }}>
//                     <div className='regiPart'>
//                         <div className='textPart2'>All you needed was a wheel in Your hand and four on the road.</div>
//                         <div className='blockPart2'>
//                             <p>Register in your Account</p>
//                             <form method='POST' onSubmit={registerhandle}>
//                                 {errorData && <div>{errorData}</div>}
//                                 <input type='text' className='input2' placeholder='Name' onChange={e => setFormData(data => ({ ...formData, name: e.target.value }))} value={formData.name} /><br></br>
//                                 <input type='email' className='input2' placeholder='Email' onChange={e => setFormData(data => ({ ...formData, email: e.target.value }))} value={formData.email} /><br></br>
//                                 <input type='number' className='input2' placeholder='Contact' onChange={e => setFormData(data => ({ ...formData, contact: e.target.value }))} value={formData.contact} /><br></br>
//                                 <input type='password' className='input2' placeholder='password' onChange={e => setFormData(data => ({ ...formData, password: e.target.value }))} value={formData.password} /> <br></br>
//                                 <input type='password' className='input2' placeholder='confirm password' onChange={e => setFormData(data => ({ ...formData, confirmPassword: e.target.value }))} value={formData.confirmPassword} /><br></br>
//                                 <button id="registerButton" type='submit'>Register</button>
//                             </form>
//                             <Link to="/"><p id="l">Sign In</p></Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )




import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function UserRegister() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [contact, setContact] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')

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

    fetch("http://localhost:8080/admin/register", {
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
    <div>
      <div className="form-container">
        <form onSubmit={submitForm} encType='multipart/form-data'>

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
{/* 
          <input
            className='confirmPassword'
            type="text"
            placeholder="Password" required
            value={confirmPassword} onChange={setFormValues}
          /> */}

          <button id="btn" type="submit">Post</button>

        </form>
      </div>
    </div>
  )

}