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
import React from "react";
import './CarList.css'
import Card from "./Card";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CarList() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/cars/getCars")
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    }, [])
    console.log(posts)

    const navigate = useNavigate()

    function takeToCarDetails(e) {
        navigate('/carDetails')
    }

    function logout(e) {
        localStorage.removeItem("token")
        navigate('/admin/signIn')
    }

    return <div className="carList">
        <header className="carList-header">
            <span id="logo">LOGO</span>
            <span id="logout" onClick={logout}>Logout</span>
        </header>
        <div className="carList-body">
            <div>
                <h1>Hello Admin....</h1>
                <p className="car-text">Cars</p>
                <button className="add-car-button" onClick={takeToCarDetails}>Add Cars</button>
            </div>
            <div className="card-holder">
                {posts.map((item, _id) => {
                    return <Card item={item} key={_id} />
                })}
            </div>
        </div>
    </div>
  );
};

export default CarList;
