import React, { useState, useEffect } from "react";
import NavLogout from "./NavLogout";
import { useNavigate,useLocation } from 'react-router-dom';
import "../Nav/MyBooking.css"
import moment from "moment";

export default function MyBooking() {
  const [BookData, setBookData] = useState([]);
  const location = useLocation();
  const {Object}  = location.state;
  const userId=Object?.userId
  console.log(Object)

  const navigate=useNavigate()

  const token = localStorage.getItem('token')

function editHandle(d){
 navigate("/editpaymentdetails/", {state:{d,Object}})
}

  useEffect(() => {
    
      fetch(`http://localhost:8080/order/${userId}`)
        .then((res) => res.json())
        .then((data) => setBookData(data.data.reverse()))
        .catch((error) => {
          console.log("Error fetching data:", error);
          // Handle the error case
        });
    
  }, [userId]);
  
  function deleteCarData(id){

    fetch(`http://localhost:8080/order/${id}`, {

        method: 'DELETE',
        headers:{
            "authorization":JSON.parse(localStorage.getItem("token"))
        },
    }).then(res => {
        if(res.status === 200){
            return true
        }
        return false
    })

}
  console.log(BookData)

  return (
    <div>
        {token ? <div>
      <NavLogout myObject={Object}/>
      {/* Render the bookData in your component */}
      {BookData.map((d, m) => {
                return <div key={m}>
                    <div id="outer">
                        <p>My Booking </p>
                        <div className="bookings">
                            <div id="myimg" className="smallerDiv" >
                                <img src={`http://localhost:8080/cars/images/${d.image}`} width="250px" alt="car"/>
                            </div>

                            <div id="toyota" className="smallerDiv">
                                <h4 >{d.name}</h4>
                                <h5>{d.type}</h5>
                                <h6>Details: {d.Details}</h6>
                                <h6>Car Details: {d.carDetails}</h6>
                            </div>

                            <div className="smallerDiv">
                                <div><span id="name-of-the-booking-hading-page">origin </span>:<span>{d.origin}</span></div>
                                <div><span id="name-of-the-booking-hading-page">Destination </span>: <span>{d.destination}</span></div>
                                <div> <span id="name-of-the-booking-hading-page">Start Date</span> :<span>{moment(`${d.startDate}`, "DD-MM-YYYY").format("MMM DD YYYY")}</span></div>
                                <div><span id="name-of-the-booking-hading-page">Start Date </span>:<span>{moment(`${d.endDate}`, "DD-MM-YYYY").format("MMM DD YYYY")}</span></div>
                            </div>
                            <div className="smallerDiv">
                            <img src={d.MapImg} alt="map is unable to render" id="Abcdefghijklmn"/>
                            </div>

                            <div className="smallerDiv">
                                <h6> <span id="name-of-the-booking-hading-page">Booking ID</span>: <span>{d.BookingId}</span></h6>
                                <h6> <span id="name-of-the-booking-hading-page">Booking Date</span>:<span>{d.date}</span> </h6>
                                <h6> <span id="name-of-the-booking-hading-page" >Booking Time</span>: <span>{d.time}</span></h6>
                            </div>
                            <div className="smallerDiv" >
                                <div className="buttons">
                                 <button id="btuunt-concle-in-exsist-Booking-edit" onClick={()=>editHandle(d)} >Edit</button>
                                 <button id="btuunt-concle-in-exsist-Booking" onClick={()=>deleteCarData(d._id)}>Cancel</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })
        }
    </div> : <div>Not Authorised</div>}
    </div>
  );
}
