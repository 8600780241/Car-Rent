import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/UserCarList.css';

export default function UserCarList() {
  const [data, setData] = useState([]);
  const [saveData, setSaveData] = useState(null);

  useEffect(() => {
    fetchCarData();
  }, []);

  const fetchCarData = async () => {
    try {
      const response = await fetch('http://localhost:8000/cars/getCars');
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
    <div id="car">
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.map((car) => (
            <div id="carcard" key={car._id}>
              <div>
                <img
                  src={`http://localhost:8000/cars/images/${car.image}`}
                  alt={car.model}
                  style={{ width: '200px' }}
                />
              </div>
              <p>6 persons</p>
              <div>
                <span id="car-name">{car.name}</span>
                <span id="car-km">{car.perKm}Rs/Km</span>
              </div>
              <div>
                <span>Fare Details</span>
                <Link to="/bookingDetails" state={{data:car}}>
                  <span id="carbook" >
                    Book Now
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
