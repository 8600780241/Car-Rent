import React from 'react'
import "../Nav/navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
// import { Link } from 'react-router-dom'




export default function NavLogout(props){
    const Object=props.myObject
    console.log(Object)
    const navigate=useNavigate()

    return<div id='navbar'>
        <div id='navlogo'>Logo</div>
       <button id='navbooking' onClick={()=>{ navigate("/mybook", { state:  Object})}}>MyBooking</button>
        <button id='navlogout' onClick={()=>localStorage.clear()} >Logout</button>

    </div>
}