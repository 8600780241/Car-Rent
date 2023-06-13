<<<<<<< HEAD
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import './BookingDetail.css';

import NavLogout from '../Nav/NavLogout';

export default function BookingDetails({props}) {
  const location = useLocation();
  const data = location.state?.data;
  const date= new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const BookingId= new Date().getTime();
  
  const navigate = useNavigate();
  const [hederdata,setHeaderData] = useState(null);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/booking/booking');
        if (response) {
          const responseData = await response.json();
          console.log(responseData)
          const lastBooking = responseData[responseData.length - 1];
         setHeaderData(lastBooking)
        } else {
          console.log('Error:', response.status);
        }
      } catch (error) {
        console.log('Network error:', error);
      }
    };
    const Object ={
        name:data?.name,
        perKm:data?.perKm,
        model:data?.model,
        milage:data?.milage,
        image:data?.image,
        type:data?.type,
        Details:data?.Details,
        carDetails:data?.carDetails,
        date:date,time:time,BookingId:BookingId,
        userId:data?._id,
        distance:hederdata?.distance,
        MapImg:hederdata?.MapImg,
        destination:hederdata?.destination,
        origin:hederdata?.origin,
        startDate:hederdata?.startDate,
        endDate:hederdata?.endDate,
        };
        let Distance ,pricing,Subtotal,Tax,total;
if(!isNaN(data?.distance)){
  Distance = parseInt(hederdata?.distance);
  pricing = parseInt(data?.perKm)
  Subtotal=(pricing*Distance);
  Tax = parseInt((Subtotal)*0.20);
   total = Subtotal+Tax;
}else{
  Distance=240
  pricing=parseInt(data?.perKm)
  Subtotal=(pricing*Distance)
  Tax = parseInt((Subtotal)*0.20);
  total = Subtotal+Tax;
}
    
    const Proceed = () => {
  

        fetch("http://localhost:8000/order",{
        method:"POST",
        headers:{
         "content-type":"application/json"
        },
        body:JSON.stringify(Object)
        })
        console.log(Object)
        
     if(Object){
        navigate("/mybooking", { state: { Object}})
     
     }
     
     
       };

  return (
    <>
      <div className='main-conatainer'>
        <NavLogout myObject={Object} />
        <div className='box-of-payment'>
          <div className='contanermaginc-lum'>
            <div className='cardetail-app'>
              <div className='upper'>
                <h3>Booking Details</h3>
                <div className='comp'>
                  <div className='bobob'>
                    <li className='name-of-the-page-payment-of-the-car'>Car Name :</li>
                    <li className='name-of-the-page-payment-of-the-car'>Car Model:</li>
                  </div>
                  <div className='bobob'>
                    <li className='ans-of-the-file-payment-in-data-of-file'>{data?.name}</li>
                    <li className='ans-of-the-file-payment-in-data-of-file'>{data?.model}</li>
                  </div>
                  <div className='image-of-car-in-rental-payment'>
                    <img src={`http://localhost:8000/cars/images/${data?.image}`} alt='not availble' className='img' />
                  </div>
=======
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
>>>>>>> 7aee251eac254eed8624c59d5566f7de27d1f89c
                </div>
              </div>
              <div className='midddle'>
                <div className='data'>
                  <li className='name-of-the-page-payment-of-the-car'>Origin :</li>
                  <li className='name-of-the-page-payment-of-the-car'>Destination :</li>
                  <li className='name-of-the-page-payment-of-the-car'>Start Date :</li>
                  <li className='name-of-the-page-payment-of-the-car'>End Date :</li>
                </div>
                <div className='data'>
                  <li className='ans-of-the-file-payment-in-data-of-file'>{hederdata?.origin}</li>
                  <li className='ans-of-the-file-payment-in-data-of-file'>{hederdata?.destination}</li>
                  <li className='ans-of-the-file-payment-in-data-of-file'>{hederdata?.startDate}</li>
                  <li className='ans-of-the-file-payment-in-data-of-file'>{hederdata?.endDate}</li>
                </div>
                <div className='image-of-hte-map'></div>
              </div>
              <div className='lower'>
                <div className='boomking-cont-dgg'>
                  <div className='bookingId'>
                    <li className='name-of-the-page-payment-of-the-car'>Booking ID :</li>
                    <li className='name-of-the-page-payment-of-the-car'>Booking Date :</li>
                    <li className='name-of-the-page-payment-of-the-car'>Booking Time :</li>
                  </div>
                  <div className='data'>
                  <li className='ans-of-the-file-payment-in-data-of-file'>{BookingId}</li>
                  <li className='ans-of-the-file-payment-in-data-of-file'>{date}</li>
                  <li className='ans-of-the-file-payment-in-data-of-file'>{time}</li>
                </div>
                </div>
                <div className='cancel-button-of-page'>
                  <button className='cncl-brfd' onClick={()=>navigate("/orderpage")}>Cancel</button>
                </div>
              </div>
            </div>
            <div className='payment'>
              <div className='payupper'>
                <h3>Payment Details</h3>
                <div className='order-details'>
                  <div className='parameter'>
                    <li className='name-of-the-page-payment-of-the-car'>Price/Km</li>
                    <li className='name-of-the-page-payment-of-the-car'>Distance</li>
                    <li className='name-of-the-page-payment-of-the-car'>SubTotal</li>
                    <li className='name-of-the-page-payment-of-the-car'>Tax (GST)</li>
                  </div>
                  <div className="data-gogog">
               <li className='ans-of-the-file-payment-in-data-of-file'>{pricing}/KM</li>
               <li className='ans-of-the-file-payment-in-data-of-file'>{Distance} Km</li>
               <li className='ans-of-the-file-payment-in-data-of-file'>{Subtotal} RS</li>
               <li className='ans-of-the-file-payment-in-data-of-file'>{Tax} RS</li>
           </div>
                </div>
              </div>
              <div className='paylower'>
                <li className='indiv-sub-class name-of-the-page-payment-of-the-car'>Grand TOTAL</li>
                <li className='ans-of-the-file-payment-in-data-of-file-total' >{total} RS</li>
              </div>

              <button className='payment-button' onClick={Proceed}>Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
