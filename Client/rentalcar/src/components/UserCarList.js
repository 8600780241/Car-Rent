import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/UserCarList.css';

export default function UserCarList() {
  const [data, setData] = useState([]);
  // const [saveData, setSaveData] = useState(null);

  useEffect(() => {
    fetchCarData();
  }, []);

  const token = localStorage.getItem('token')

  const fetchCarData = async () => {
    try {
      const response = await fetch('http://localhost:8080/cars/getCars');
      if (response.ok) {
        const carData = await response.json();
        setData(carData);
      } else {
        console.log('Error:', response.status);
      }
    } catch (error) {
      console.log('Network error:', error);
    }
  };

  return (
    <div>
      {token ? <div id="car">
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.map((car) => (
            <div id="carcard" key={car._id}>
              <div className='img-holder'>
                <img
                id='imgs'
                  src={`http://localhost:8080/cars/images/${car.image}`}
                  alt={car.model}
                />
              </div>
              <p id='person-field'>{car.carDetails}</p>
              <div>
                <span id="car-names">{car.name}</span>
                <span id="car-km">{car.perKm}Rs/Km</span>
              </div>
              <div>
                <span id='fare-details'>Fare Details</span>
                <Link to="/bookingDetails" state={{data:car}} style={{ textDecoration: "none" }}>
                  <span id="carbook">
                    Book Now
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div> : <div>Not Authorized</div>}
    </div>
  );
}
