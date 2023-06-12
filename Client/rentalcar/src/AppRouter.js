import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from "./components/Landing";
import UserRegister from "./components/UserRegister";
import Booking from "./components/Booking";
import AdminSignIn from "./components/Admin/AdminSignIn";
import CarDetails from "./components/Admin/CarDetails";
import OrderPage from "./components/Orderpage";
import AdminRegister from "./components/AdminRegister";
import CarList from "./components/Admin/CarList";
import MyBooking from "./components/Nav/MyBooking";
import PaymentDetails from "./components/Payment/ParentComponent";


export default function AppRouter(){
     return<div>
        <Router>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/userRegister" element={<UserRegister/>}/>
                <Route path="/booking" element={<Booking/>} />
                <Route path="/orderpage" element={<OrderPage/>}/>
                <Route path="/admin/signIn" element={<AdminSignIn/>}/>
                <Route path="carDetails" element={<CarDetails/>} />
                <Route path="/carDetails" element={<CarDetails/>} />
                <Route path="/orderPage" element={<OrderPage/>} />
                <Route path="/adminRegister" element={<AdminRegister/>} />
                <Route path="/adminCarList" element={<CarList/>}/>
                <Route path="/mybooking" element={<MyBooking/>}/>
                <Route path="/payment" element={<PaymentDetails/>}/>
                <Route path="/carlist" element={<CarList/>}/>
            </Routes>
        </Router>
     </div>
}