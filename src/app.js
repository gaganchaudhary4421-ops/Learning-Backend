const express = require("express");
const multer = require("multer");
const app = express();
app.use(express.json());
const upload = app.post("/create-post", (req, res) => {
  console.log(req.body);

  res.status(201).json({
    message: "Post created successfully",
  });
});
module.exports = app;
