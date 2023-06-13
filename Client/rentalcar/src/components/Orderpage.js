import React, { useEffect, useState,useContext} from 'react';
import CarList from './Admin/CarList';
import NAvLogout from './Nav/NavLogout';
import FilterPage from './Nav/FilterPage';




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
        <div id='bookingpage'>
        {data ? (
          <div>
            <p>
              Origin: {data.origin}  ---   Destination: {data.destination}          Start Date: {data.startDate}   --    End Date: {data.endDate}
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <CarList/>
      </div>
    );
};

export default OrderPage;
