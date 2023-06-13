const mongoose = require("mongoose")
require("dotenv").config();
<<<<<<< HEAD
let BASE_URL = process.env.BASE_URL;
=======
let BASE_URL= process.env.DB_URL;
>>>>>>> 7aee251eac254eed8624c59d5566f7de27d1f89c

mongoose.connect(BASE_URL).then(() => {
    console.log("Connected to db...")
})
    .catch(() => {
        console.log("Failed to connect to db")
    })
    .catch((err) => {
        console.log("Failed to connect to db", err)
    })

})

