const express = require("express");
const path = require("path");
const { UserDetails } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Initialize Express
const app = express();
//Routes
app.get("/api/user/:username", (req, res) => {  
    let id = req.params.id;
    UserDetails.findAll({
        where: {
            ID: id
        }
    })
    .then(data => res.json(data))
    .catch(err => res.json(err))
});
app.post("/api/user/:username/check", (req, res) => {
    let password = req.body.password;
    console.log(req.body);
    console.log(password)
    let username = req.params.username;
    UserDetails.findOne({
        where: {
            Password: password,
            Username: username
        }
    })
    .then(data => {      
        if(data){
            return res.json(data)
        } else {
            return res.json("Invalid login")
        }
    })
    .catch(err => res.json(err))
})
app.post("/api/user", (req, res) => {
    let { firstName, lastName, email, password, username } = req.body;
    UserDetails.findAll({
        where: {
            Email: email
        }
    })
    .then(data => {
        if(data.length){
            return res.json({ email: "email exists"})
        } else {
            UserDetails.create({
                First_Name: firstName,
                Last_Name: lastName,
                Email: email,
                Password: password,
                Username: username
            })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
        }
    })
    .catch(err => res.json(err))
});
app.put("/api/deposit/:username/:type", (req, res) => {
    let type = req.params.type;  
    UserDetails.update(
        { [type]: req.body.amount },
        { where: { Username: req.params.username}}
    )
    .then(res => res.json(data))
    .catch(err => res.json(err))
})
app.get("/*", (req, res) => {   
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = app;