const express = require('express');
const router = express.Router();
const user = require('../model/user.model')
/* GET users listing. */
router.get('/', function (req, res) {
  res.send("hello");
});
router.post('/registerUser', async function (req, res) {
  let data = req.body;
  res.send(data)
  let result = new user({
    name: data.name,
    email: data.email,
    contact: data.contact,
    password: data.password
  })
  let ans = await result.save();
  console.log(ans)

})
module.exports = router;