import React from 'react'
import './BookingDetail.css'

import image from './0_578_872_0_70_http___cdni.autocarindia.com_ExtraImages_20170911074216_Crysta_New@2x.png'
export default function BookingDetails() {
    const token = localStorage.getItem('token')
    function logout(e) {
        localStorage.removeItem("token")
       
    }
    
    return (
        <>
            <div className='main-conatainer'>
                <nav>
                    <div id='fnav'>LOGO</div>
                    <div id='snav'>My Booking</div>
                    <div id='tnav' onClick={logout}>Logout</div>
                </nav>
                <div className='main'>
                    <div className='first'>
                        <h5 id='heading1'>Booking Details</h5>
                        <div className='carn'>
                            <div>Car Name<span><h4 id='carname'>Toyota Innova 6 seater</h4></span></div>
                            <div id='set'>Car Number<span ><h5 id="carNu">KA 37 BB 9999</h5></span></div>
                            <img src={image} alt="img" className='image' />
                        </div>
                        <div className='carD'>
                            <p className='f'>origin<span><p className='s'>Benguluru</p></span></p>
                            <p className='f1' >Destination<span><p className='s1' >Bombay</p></span></p>
                            <p className='f2'>Start Date<span><p className='s2'>2 jan</p></span></p>
                            <p className='f3'>End Date<span><p className='s3'>10 Aug</p></span></p>
                        </div>
                        <div className='carB'>
                            <p className='f4'>Booking ID<span><p className='s4'>GOTSE8</p></span></p>
                            <p className='f5'>Booking Date<span><p className='s5'>14-APRIL-2019</p></span></p>
                            <p className='f6'>Booking Time<span><p className='s6'>8:00 PM</p></span></p>
                        </div>
                        <button className='cancle-btn'>Cancle</button>
                    </div>
                    <div className='second'>
                        <h5 id='heading1' >Payment Details</h5>
                        <div className='paymentDetails'>
                            <p className='a1'>Price per Km<span><p className='b1'>20 / Km</p></span></p>
                            <p className='a2'>pricing<span><p className='b2'>1500r</p></span></p>
                            <p className='a3'>Tax Charges<span><p className='b3'>50r</p></span></p>
                        </div>
                        <div className='total'>
                            <h6 >Sub Total</h6>
                            <h6 className='rs'>1500r</h6>
                        </div>
                        <lable className='statement'>It is a long established fact that a reader will be distracted by the readable content</lable>
                        <input type="checkbox" id="check" name="check" value="check" />
                        <div>
                            <button className='proceed'>Procced</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}