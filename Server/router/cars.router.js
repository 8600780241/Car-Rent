const express = require('express');
const carDetails = require("../model/cars.model")
const multer = require("multer");
const path = require('path');
const carsRouter = express.Router();


carsRouter.use('/images',express.static("uploads"))

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,callback){
            callback(null,'uploads')
        },
        filename:function(req,file,callback){
            callback(null,file.originalname)
        }
    })
})

carsRouter.get("/getCars", async (req,res)=>{
    try{
        const data = await carDetails.find();
        res.json(data)
    }catch(err){
        console.log(err)
    }
})

carsRouter.get("/getCars/:id", async (req,res)=>{
    try{
       const data = await carDetails.find({_id: req.params.id})
       res.json(data)
    }catch(err){
        console.log(err)
    }
})

carsRouter.post("/postCar",upload.single('image'),(req,res)=>{
    console.log(req.body)
        const Car = new carDetails({
        name: req.body.name,
        type: req.body.type,
        model: req.body.model,
        milage: req.body.milage,
        image: req.file.originalname,
        availableFrom: req.body.availableFrom,
        availableTill: req.body.availableTill,
        perKm: req.body.perKm,
        description: req.body.description,
        carDetails: req.body.carDetails,
        Details: req.body.Details
    })
    Car.save()
    .then(data => {
        res.status(200).json({
            message : "success"
        })
    })
    .catch(err => {
        res.status(400).json({
            error : "Failed to save carDetails"
        })
    })
})


carsRouter.put('/updateCar/:id', async (req, res) => {
    const id = req.params.id
    console.log(id)

    try {
        const Car = await carDetails.findById(id)
        if (Car) {
            console.log(req.body)
            const newCar = await carDetails.findByIdAndUpdate(id, req.body)
            const updatedCar = await newCar.save()
            res.status(200).json({
                status: "success",
                result: updatedCar
            })
        } else {
            res.status(401).json({
                message: "data not found"
            })
        }
    }
    catch {
        err => res.json({
            message: err.message
        })
    }
})

module.exports = carsRouter
