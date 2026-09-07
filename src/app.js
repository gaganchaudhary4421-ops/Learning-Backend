const express = require("express");
const noteModel = require("./models/models.js");
const app = express();
app.use(express.json());
const notes = [];
app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description,
  });
  res.status(201).json({
    message: "Note created successfully",
  });
});
app.get("/notes", async (req, res) => {
  const notes = await noteModel.find(
    res.status(200).json({
      message: "Note fetched successfully",
      notes: notes,
    }),
  );
});
module.exports = app;
