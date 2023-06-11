const express = require("express");
const signInrouter = express.Router();
//const signInUser = require('../model/signin.model');
const user = require('../model/user.model')

signInrouter.get("/signInUser", async function (req, res) {
  let data = req.body;

  let findData = {
    email: data.email,
    password: data.password
  }
  let ans = await user.find({ findData });
  res.send(ans)
  console.log(ans)
})
module.exports = signInrouter;