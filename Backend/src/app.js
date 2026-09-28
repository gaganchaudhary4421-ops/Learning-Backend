const express = require("express");
const connectDB = require("./db/db");
const postModel = require("./models/post.model.js");
const multer = require("multer");
const storageService = require("./services/storage.service.js");
const cors = require("cors");

const upload = multer({
  storage: multer.memoryStorage(),
});

const app = express();

app.use(express.json());
app.use(cors());

app.post("/posts", upload.single("image"), async (req, res) => {
  try {
    console.log("File:", req.file);
    console.log("Body:", req.body);

    if (!req.file) {
      return res.status(400).json({
        message: "Image is required",
      });
    }

    const result = await storageService.uploadFile(req.file.buffer);

    console.log("Upload result:", result);

    const post = await postModel.create({
      caption: req.body.caption,
      imageUrl: result.URL,
    });

    res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    console.error("CREATE POST ERROR:", error);

    res.status(500).json({
      message: "Failed to create post",
      error: error.message,
    });
  }
});

// Get all posts
app.get("/posts", async (req, res) => {
  try {
    const posts = await postModel.find();

    // Return the array directly
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch posts",
      error: error.message,
    });
  }
});

module.exports = app;
