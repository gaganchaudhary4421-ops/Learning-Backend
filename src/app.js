const express = require("express");
const connectDB = require("./db/db");
const postModle = require("./models/postModel");
const multer = require("multer");
const storageService = require("./services/storageService");
const upload = multer({ storage: multer.memoryStorage() });
const app = express();
app.use(express.json());
app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await storageService.uploadImage(req.file.buffer);
  const
});
module.exports = app;
