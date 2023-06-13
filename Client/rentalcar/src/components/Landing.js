import React, { useState } from 'react';
import { Link } from "react-router-dom";
import image from './backImage.png';
import { useNavigate } from 'react-router-dom';
export default function Landing() {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""
//     });
//     const [errorData, setErrorData] = useState("");
//     function validate() {
//         const { email, password } = formData;
//         if (!email || !password) {
//             return "All fields are mandatory"
//         }
//         if (!(email.includes('@'))) {
//             return "Email must contain @"
//         }
//         if (password.length < 6) {
//             return "Password must contain atleast 6 letters"
//         }
//     }
// console.log(formData)
//     function signInHandler(e) {
//         e.preventDefault();
//         const error = validate();
//         if (error) {
//             setErrorData(error);
//         } else {
//             setErrorData("")
//         }
//         console.log(formData)

//         fetch("http://localhost:8000/user/loginUser", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//               localStorage.setItem("token",data.data);
//          console.log("token",data.data)
//             navigate('/bookingDetails');
//             }
//             )

//     }
const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    //const [errorMessage, setErrorMessage] = useState("")

   function setForm(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    // function takeToCreateAdmin(e){
    //     navigate("/adminRegister")
    // }

    function signInHandler(e) {
        e.preventDefault()

      fetch("http://localhost:8080/user/loginUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.data)
        navigate('/bookingDetails')
      })
    
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
                </div>
            </div>
        </div>
        <div className='blockPart1'>
            <p>Sign in your Account</p>
            <form onSubmit={signInHandler}>
         
                <input type='text' className='input1' name='email' placeholder=' Email' onChange={setForm} value={formData.email} />
                <input type='password' className='input1' name='password' placeholder='  Password' onChange={setForm} value={formData.password} />
                <p id='forgetPassword'>Forget Password?</p>
                <button className='signInbutton' type='submit'>SIGN IN</button>
                <Link to="/userRegister"><p id='createAccount'>Create Account</p></Link>
            </form>
        </div>
    </div>


    )
}