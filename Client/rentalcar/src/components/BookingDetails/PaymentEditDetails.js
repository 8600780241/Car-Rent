
import React from "react";
import { useState,useEffect } from "react";
import { useLocation ,useNavigate} from "react-router-dom";
import "./PaymentEditDetails.css"

export default function PaymentEditDetails() {
    const [EditPaymentDetails , setEditPaymentDetails] = useState({})
    const navigate=useNavigate()
  const location = useLocation();
  const  {d} = location.state;
  const {Object}=location.state
  const [Data,setData]=useState({})

  useEffect(()=>{
    setEditPaymentDetails(d)
  },[])
  console.log(EditPaymentDetails)
  const {BookingId,date,time,image,name,Details,carDetails,type ,pricing,pricekm,total,Tax,perKm,origin,destination}= EditPaymentDetails
  function editformsubmitFunc(e){
    e.preventDefault();

    fetch(`http://localhost:8080/order/${EditPaymentDetails._id}` , {

      method:"PATCH",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(EditPaymentDetails),
    }).then(res=>res.json())
    .then(data=>setData(data))
    // navigate("/mybooks", { state: { Object}})
     

}
  return (
    <div>
      <h2 id="name-edit-details-payment-edit">Edit Payment Details</h2>
<form onSubmit={editformsubmitFunc} id="Edit-form-payment-details">
    <div id="form-leftside-edit-part-in-payment">
    <div id="edit-payment-details-block">
    <label>Car Name</label>
    
     <span id="name-of-the-car-edit-payment">{name}</span><br></br>
    <img src={`http://localhost:8080/cars/getCars/${image}`} id="image-edit-payment-details-in-data"></img>
    <label>Car Number</label>
    <span className="name-of-the-span-css-for-payment-details" id="type-of-the-car-in-payment">Ayx123</span><br/>
    </div>
    <hr></hr>
<div id="for-maip-i-created-container">
{/* <iframe className='map-of-doom image-of-hte-map-of-the-edit-page' src="https://api.maptiler.com/maps/d83d5871-7ce5--83ab-b3eba4dbe913/?key=84ZcHnnKB7aX6ZDDRMiu#1.0/0.00000/0.00000"  ></iframe> */}
<div id="map-of-the-edit-payment-details">
</div>
    
    <label >Origin</label>
    <input type="text" name="origin" className="edit-form-payment-details" id="origin-of-the-edit-page" onChange={(e)=>setEditPaymentDetails({...EditPaymentDetails,origin:e.target.value})} value={EditPaymentDetails.origin}/><br/>
    <label>Destination</label>
    <input type="text" name="destination" className="edit-form-payment-details" onChange={(e)=>setEditPaymentDetails({...EditPaymentDetails,destination:e.target.value})} value={EditPaymentDetails?.destination} /><br/>
    <label>Start Date</label>
    <input type="date" name="startDate" className="edit-form-payment-details" onChange={(e)=>setEditPaymentDetails({...EditPaymentDetails,startDate:e.target.value})} value={EditPaymentDetails.startDate} /><br/>
    <label>End Date</label>
    <input type="date" name="endDate" className="edit-form-payment-details" onChange={(e)=>setEditPaymentDetails({...EditPaymentDetails,endDate:e.target.value})} value={EditPaymentDetails.endDate}/><br/>
    </div>
<hr></hr>
<label>Booking Id</label>
<span className="name-of-the-span-css-for-payment-details">{BookingId}</span><br></br>
<label>Booking Date</label>
<span className="name-of-the-span-css-for-payment-details">{date}</span><br></br>
<label >Booking Time</label>
<span className="name-of-the-span-css-for-payment-details">{time}</span><br></br>
<hr></hr>
<button id="btn-cancle-payment-details" onClick={()=>navigate("/mybooking")}>Cancle</button>
</div>
<div id="form-rightside-edit-part-in-payment">
    <label>pricekm</label>

    <span className="name-of-the-span-css-for-payment-details">{perKm}RS/KM</span><br></br>
    <label>pricing</label>
    <span className="name-of-the-span-css-for-payment-details">3084 RS</span><br></br>
    <label>tax charges</label>
    <span className="name-of-the-span-css-for-payment-details">304 RS</span><br></br>
    <hr></hr>
    <label className="name-of-the-span-css-for-payment-details-total-subtotal">subTotal</label>
    <span className="name-of-the-span-css-for-payment-details-total">3388</span><br></br>
<div id="djknfkjnfkjwrnrfkw">
    <input type="checkbox" id="input-type-checkboc-payment-detais"/>
    <label>it is the long istablished fact that a render will be destracted by the readable content</label>
    </div>
    <br/>
     <button type="submit" id="btn-proceed-payment-details"  onClick={()=>{ navigate("/mybooks", { state:  Object})}}>Proceed</button>
</div>
 
</form>
    </div>
  );
}
