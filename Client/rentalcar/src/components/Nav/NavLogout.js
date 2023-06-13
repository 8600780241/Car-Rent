import React from 'react'
import "../Nav/navbar.css"
import { Link } from "react-router-dom"



export default function NAvLogout(){
    return<div id='navbar'>
        <div id='navlogo'>Logo</div>
       <Link to="/mybooking" id='navbooking'><div >My Booking</div></Link>
        <div id='navlogout'>Logout</div>

    </div>
}