const express = require('express');
const router = express.Router();
const user = require('../model/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'dcfyu6t67435467%#4748996iugyut6'
/* GET users listing. */
router.get('/', function (req, res) {
  res.send("hello");
});
router.post('/registerUser', async function (req, res) {
  let data = req.body;
  const encryptedPassword = await bcrypt.hash(data.password, 10);
  const oldUser = await user.findOne({
    email: data.email
  })
  if (oldUser) {
    return res.json({ error: "user Exists" })
  }
  let result = new user({
    name: data.name,
    email: data.email,
    contact: data.contact,
    password: encryptedPassword
  })
  let ans = await result.save();
  res.send(ans)
  console.log(ans)

})

router.post("/loginUser", async (req,res) => {
  const {email, password } = req.body;
  const User = await user.findOne({email});
  if (!User) {
    return res.json({ error: "user not found" })
  }
  if(await bcrypt.compare(password,User.password)) {
    const token = jwt.sign({
      email:User.email,
      id:user._id
    },JWT_SECRET,
    {
      expiresIn : "1h"
  }
    );
    if(res.status (201)) {
      return res.json({status:"ok", data:token})
    } else {
      return res.json({error:"error"})
    }
  }
  res.json({status:"error",error:"invalid password"})
});
module.exports = router;