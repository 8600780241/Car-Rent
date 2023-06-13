import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from "./components/Landing";
import UserRegister from "./components/UserRegister";
import Booking from "./components/Booking";
import AdminSignIn from "./components/Admin/AdminSignIn";
import CarDetails from "./components/Admin/CarDetails";
import OrderPage from "./components/Orderpage";
import BookingDetails from "./components/BookingDetails/bookingDetails";
import AdminRegister from "./components/AdminRegister";
import CarList from "./components/Admin/CarList";
import MyBooking from "./components/Nav/MyBooking";
import EditCarDetails from "./components/Admin/EditCarDetails";
import UserCarList from "./components/UserCarList";
import PaymentEditDetails from "./components/BookingDetails/PaymentEditDetails";
import MyBook from "./components/BookingDetails/MyBook";
import MyBooks from "./components/BookingDetails/MyBooks";



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
                <Route path="/mybook" element={<MyBook/>}/>
                <Route path="/orderPage" element={<OrderPage/>} />
                <Route path="/bookingDetails" element={<BookingDetails/>}/>
                <Route path="/adminRegister" element={<AdminRegister/>} />
                <Route path="/adminCarList" element={<CarList/>}/>
                <Route path="/mybooking" element={<MyBooking/>}/>
                <Route path="/carlist" element={<UserCarList/>}/>
                <Route path="/mybooks" element={<MyBooks/>}/>
                <Route path="/editCarDetails/:id" element={<EditCarDetails/>} />
                <Route path="/editpaymentdetails/" element={<PaymentEditDetails/>}/>
            </Routes>
        </Router>
     </div>
}