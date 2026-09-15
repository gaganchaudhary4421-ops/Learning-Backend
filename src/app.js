const express = require("express");
const multer = require("multer");
const storageService = require("./services/storage.service.js");
const app = express();
const postModel = require("./models/post.model.js");
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await storageService.uploadFile(req.file.buffer);
  const postModel = await postModel.create({
    title: req.body.title,
    description: req.body.description,
    imageUrl: result.url,
  });
  //created post api
  res.status(201).json({
    message: "Post created successfully",
    post,
  });
});
// Learning Get Api
app.get("/create-post", (req, res) => {
  res.status(200).json({
    message: "Get request successful",
  });
});
module.exports = app;
