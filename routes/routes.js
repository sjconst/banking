const express = require("express");
const path = require("path");
const { UserDetails } = require("../models");
// Initialize Express
const app = express();
//Routes
app.get("/api/user/id/:id", (req, res) => {  
    let id = req.params.id;
    UserDetails.findAll({
        where: {
            ID: id
        }
    })
    .then(data => res.json(data))
    .catch(err => res.json(err))
});
app.get("/api/user/check/:username/:password", (req, res) => {
    let password = req.params.password;
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
app.post("/api/saveUser", (req, res) => {
    let {firstName, lastName, email, password, username } = req.body;
    console.log(email);
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
app.get("/*", (req, res) => {
    console.log("routes being hit");
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = app;