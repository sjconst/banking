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
app.get("/api/user/email/:email", (req, res) => {
    let email = req.params.email;
    UserDetails.findAll({
        where: {
            Email: email
        }
    })
    .then(data => {
        console.log(data)
        if(data){
            return res.json({ email: "email already exists"})
        }
    })
    .catch(err => res.json(err))
})
app.post("/api/saveUser", (req, res) => {
    let {firstName, lastName, email, password } = req.body;
    console.log(email);
    UserDetails.findAll({
        where: {
            Email: email
        }
    })
    .then(data => {
        console.log("HELLLLO")
        console.log(data);
        if(data.length){
            return res.json({ email: "email already exists"})
        } else {
            UserDetails.create({
                First_Name: firstName,
                Last_Name: lastName,
                Email: email,
                Password: password
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