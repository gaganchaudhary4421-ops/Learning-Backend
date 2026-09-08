const express = require("express");
const app = express();
app.use(express.json());
app.post("/create-post", (req, res) => {
  res.status(201).json({
    message: "Post created successfully",
  });
});
module.exports = app;
