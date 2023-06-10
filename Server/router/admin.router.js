const express = require('express');
const adminRouter = express.Router();
const admin = require('../model/admin.model')
const bcrypt = require('bcrypt');

adminRouter.get('/register', (req, res) => {
    res.send("OK")
})

adminRouter.post("/register", (req, res) => {
    const adminInfo = req.body
    console.log(adminInfo)
    bcrypt.hash(adminInfo.password, 10).then((encryptedPassword) => {
        const Admin = new admin({
            name : adminInfo.name,
            email : adminInfo.email,
            contact : adminInfo.contact,
            password : encryptedPassword
        })
        console.log(Admin)
        Admin.save().then(newAdmin => {
            res.status(201).json({
                message : "Encryption Successfull",
                data : newAdmin
            })
        }).catch(err => {
            res.json({
                message: "Failed to encrypt the password",
                error : err
            })
        })
    }).catch(err => {
        res.json({
            message : "Failed to create new user",
            error : err
        })
    })
})

module.exports = adminRouter;