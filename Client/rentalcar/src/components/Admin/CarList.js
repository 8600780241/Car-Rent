
import React from "react";
import './CarList.css'
import Card from "./Card";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CarList() {

    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:8080/cars/getCars")
    //         .then(res => res.json())
    //         .then(data => {
    //             setPosts(data)
    //         })
    // }, [])

    const token = localStorage.getItem('token')

    useEffect(() => {
        fetch("http://localhost:8080/cars/getCars", {
            method: 'GET',
            headers: {
              'Authorization': token,
            }
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
           setPosts(data)
         })
    }, [])

    const navigate = useNavigate()

    function takeToCarDetails(e) {
        navigate('/carDetails')
    }

    function logout(e) {
        localStorage.removeItem("token")
        navigate('/admin/signIn')
    }

    return<div>
        {token ? <div className="carList">
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
    </div> : <div>Not Authorised</div>}
    </div>
  ;
};

