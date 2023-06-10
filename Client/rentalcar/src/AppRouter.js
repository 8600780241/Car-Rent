import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from "./components/Landing";
import UserRegister from "./components/UserRegister";
import Booking from "./components/Booking";
import AdminSignIn from "./components/Admin/AdminSignIn";

export default function AppRouter(){
     return<div>
        <Router>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/userRegister" element={<UserRegister/>}/>
                <Route path="/booking" element={<Booking/>} />
                <Route path="admin/signIn" element={<AdminSignIn/>}/>
            </Routes>
        </Router>
     </div>
}