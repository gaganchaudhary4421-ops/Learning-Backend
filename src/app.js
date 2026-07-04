//app.JS
const express = require("express"); //accessing express package
const app = express(); //creating an instance of express
module.exports = app;
const notes = [];
app.post("/notes", () => {}); //Api call to create a note
