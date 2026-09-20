const express = require("express");
const connectDB = require("./db/db");
const postModel = require("./models/post.model.js");
const multer = require("multer");
const storageService = require("./services/storage.service.js");
const upload = multer({ storage: multer.memoryStorage() });
const app = express();
app.use(express.json());
app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await uploadFile(req.file.buffer);
  const post = await postModel.create({
    caption: req.body.caption,
    imageUrl: result.URL,
  });
  res.status(201).json({
    message: "Post created successfully",
    post,
  });
});
module.exports = app;
//write code again
//Connect database and imagekit
//Checking full functionality
