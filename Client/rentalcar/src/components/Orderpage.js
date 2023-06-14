import React, { useEffect, useState} from 'react';
import NAvLogout from './Nav/NavLogout';
import FilterPage from './Nav/FilterPage';
import UserCarList from './UserCarList'
import { Link } from 'react-router-dom';
import moment from 'moment';

const OrderPage = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetchData();
    }, []);

    const token = localStorage.getItem('token')
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/booking/booking');
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
        {token ? <div>
        <NAvLogout/>
        <FilterPage/>
      <div className='container'>
        <form id="form" action="">

          <li className='Origin' 
             >Origin : {data?.origin}</li>

          <i className="fa-solid fa-arrow-right  arrow" style={{ color: "#4279cd" }}></i>

          <li  className="Origin"
            >Destination : {data?.destination}</li>

          <li type="date"  className="Origin" 
             >Starting from : {moment(`${data?.startDate}`, "DD-MM-YYYY").format("MMM DD YYYY")}</li>

          <li type="date"  className="Origin"
            >Ending : {moment(`${data?.endDate}`, "DD-MM-YYYY").format("MMM DD YYYY")}</li>

          
          <Link to="/booking" id="modify" >Modify</Link>
        </form>
    
      </div>
      <UserCarList/>
      </div> : <div>Not Authorized</div>}
      </div>
    );
};

export default OrderPage;
