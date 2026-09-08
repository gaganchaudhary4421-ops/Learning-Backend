const express = require("express");
const multer = require("multer");
const storageService = require("./services/storage.service.js");
const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const result = await storageService.uploadFile(req.file.buffer);
  console.log(result);

  res.status(201).json({
    message: "Post created successfully",
  });
});
module.exports = app;
