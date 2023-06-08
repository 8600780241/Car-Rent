const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const db = require('./db/connection');
const router = require('./router/user.router');


app.use(express.urlencoded({extended : true}))
app.use(express.json());
app.use(cors())

app.use('/user', router);

app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server listening...`)
});