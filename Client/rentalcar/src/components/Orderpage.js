import React, { useEffect, useState,useContext} from 'react';
import CarList from './Admin/CarList';
import NAvLogout from './Nav/NavLogout';
import FilterPage from './Nav/FilterPage';
import UserCarList from './UserCarList'
import BookingDetails from './BookingDetails/bookingDetails';
import { Link } from 'react-router-dom';




const OrderPage = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/booking/booking');
        if (response) {
          const responseData = await response.json();
          const lastBooking = responseData[responseData.length - 1];
          setData(lastBooking);
        } else {
          console.log('Error:', response.status);
        }
      } catch (error) {
        console.log('Network error:', error);
      }
    };
  
    return (
      <div>
        <NAvLogout/>
        <FilterPage/>
      <div className='container'>
        <form id="form" action="">

          <li className='Origin' 
             >Origin :{data?.origin}</li>

          <i className="fa-solid fa-arrow-right  arrow" style={{ color: "#4279cd" }}></i>

          <li  className="Origin"
            >Destination :{data?.destination}</li>

          <li type="date"  className="Origin" 
             >Starting from :{data?.startDate}</li>

          <li type="date"  className="Origin"
            >Ending :{data?.endDate}</li>

          
          <Link to="/booking" id="modify" >Modify</Link>
        </form>
    
      </div>
      <UserCarList/>
      </div>
    );
};

export default OrderPage;
