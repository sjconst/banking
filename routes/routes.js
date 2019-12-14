const express = require("express");
const path = require("path");
const { UserDetails } = require("../models");
// Initialize Express
const app = express();
//Routes
app.get("/api/user/:id", (req, res) => {
    console.log("getting user" );
    let id = req.params.id;
    UserDetails.findAll({
        where: {
            ID: id
        }
    })
    .then(data => res.json(data))
    .catch(err => res.json(err))
});
app.post("/api/saveUser", (req, res) => {
    let {firstName, lastName, email, password } = req.body;
    UserDetails.create({
        First_Name: firstName,
        Last_Name: lastName,
        Email: email,
        Password: password
    })
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err))
})
app.get("/*", (req, res) => {
    console.log("routes being hit");
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = app;