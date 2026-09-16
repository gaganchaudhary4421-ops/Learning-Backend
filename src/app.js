const express = require("express");
const connectDB = require("./db/db");
const multer = require("multer");
const storageService = require("./services/storageService");
const app = express();
app.use(express.json());
module.exports = app;
