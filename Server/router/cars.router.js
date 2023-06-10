const express = require('express');
const carDetails = require("../model/cars.model")

const carsRouter = express.Router();

carsRouter.post("/postCar", (req, res) => {
    const adminInfo = req.body

    const Car = new carDetails({
        name: req.body.name,
        type: req.body.type,
        model: req.body.model,
        milage: req.body.milage,
        image: req.body.image,
        availableFrom: req.body.availableFrom,
        availableTill: req.body.availableTill,
        perKm: req.body.perKm,
        description: req.body.description,
        carDetails: req.body.carDetails,
        Details: req.body.Details
    })
    console.log(Car)
    Car.save().then(newAdmin => {
        res.status(201).json({
            message: "Car details saved successfully",
            data: newAdmin
        })
    }).catch(err => {
        res.json({
            message: "Failed to save Car details",
            error: err
        })
    })
})

carsRouter.get('/getCars', async(req, res) => {
    try{
        const carData = await carDetails.find();
        res.json(carData)
    }catch(err){
        console.log(err)
    }
})

module.exports = carsRouter