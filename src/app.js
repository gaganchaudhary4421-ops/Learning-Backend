//app.JS
const express = require("express"); //accessing express package
const app = express(); //creating an instance of express
app.use(express.json());

const notes = [];
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).send({
    message: "Note created successfully",
  });
}); //Api call to create a note
module.exports = app;
