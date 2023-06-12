const mongoose = require("mongoose")
require("dotenv").config();
let BASE_URL= process.env.BASE_URL;

mongoose.connect(BASE_URL).then(() => {
    console.log("Connected to db...")
})
    .catch(() => {
        console.log("Failed to connect to db")
    })
.catch((err) => {
    console.log("Failed to connect to db",err)



