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
})
app.get("/*", (req, res) => {
    console.log("routes being hit");
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = app;