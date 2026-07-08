//app.JS
const express = require("express"); //accessing express package
const app = express(); //creating an instance of express
app.use(express.json());

const notes = [];
app.post("/notes", (req, res) => {
  console.log(req.body);
}); //Api call to create a note
module.exports = app;
