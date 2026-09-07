const express = require("express");
const noteModel = require("./models/models.js");
const app = express();
app.use(express.json());
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
  const notes = await noteModel.find();
  res.status(200).json({
    message: "Note fetched successfully",
    notes: notes,
  });
});
app.delete("/notes/:index", async (req, res) => {
  const index = req.params.index;
  await noteModel.findOneAndDelete({ _id: index });
  res.status(200).json({
    message: "Note deleted successfully",
  });
});
module.exports = app;
