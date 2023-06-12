import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Payment/ParentComponent';

const CarList = () => {
  const [data, setData] = useState([]);
  // const { saveData,setSaveData } = useContext(DataContext);

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

  const handleBookNow = (car) => {
    // setSaveData(car);
  };

  return (
    <div id='car'>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.map((car) => (
            <div id='carcard' key={car._id}>
              <div>
                <img
                  src='https://th.bing.com/th/id/OIP.cOV-9eBCggKWQD4xHFzoCAHaEo?pid=ImgDet&rs=1'
                  alt={car.model}
                  style={{ width: '200px' }}
                />
              </div>
              <p>6 persons</p>
              <div>
                <span id='carname'>{car.name}</span>
                <span id='carkm'>{car.perKm}Rs/Km</span>
              </div>
              <div>
                <span>Fare Details</span>
                <Link to="/payment">
                  <span id='carbook' onClick={() => handleBookNow(car)}>
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
};

export default CarList;
