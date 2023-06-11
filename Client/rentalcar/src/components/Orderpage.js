import React, { useEffect, useState } from 'react';


const OrderPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/booking/booking');
        if (response.ok) {
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
    );
};

export default OrderPage;
