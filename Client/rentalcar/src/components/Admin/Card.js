import React from "react";
import moment from 'moment'
import './Card.css'
import { Link } from "react-router-dom";

export default function Card(props) {

    const { item } = props
    console.log(item)

    return<div className="card">
        <Link to={`/editCarDetails/${item._id}`}>
        <div className="img-container">
            <img src={`http://localhost:8000/cars/images/${item.image}`} alt="sample" />
        </div>
        </Link>
        <div className="card-body">
            <p id="one">{item.carDetails}</p>
            <span id="car-name">{item.name}</span>
            <span id="per-km">{item.perKm}  Rs/KM</span><br />
            <span id="two">Available date</span>
            <span id="date-format">
                <span>{moment(`${item.availableFrom}`, "DD-MM-YYYY").format("MMM DD")}</span>
                <span>-</span>
                <span>{moment(`${item.availableTill}`, "DD-MM-YYYY").format("MMM DD")}</span>
            </span>
        </div>
    </div>
}