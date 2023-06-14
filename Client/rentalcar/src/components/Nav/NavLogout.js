import React from 'react'
import "../Nav/navbar.css"
import { useNavigate } from 'react-router-dom'

export default function NavLogout(props){
    const Object=props.myObject
    console.log(Object)
    const navigate=useNavigate()

    function logout(e) {
        localStorage.removeItem("token")
        navigate('/')
    }

    return<div id='navbar'>
        <div id='navlogo'>Logo</div>
       <button id='navbooking' onClick={()=>{ navigate("/mybook", { state:  Object})}}>MyBooking</button>
        <button id='navlogout' onClick={logout} >Logout</button>
    </div>
}