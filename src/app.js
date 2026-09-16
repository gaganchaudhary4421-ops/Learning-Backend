const express = require("express");
const connectDB = require("./db/db");
require("dotenv").config();
const app = express();
app.use(express.json());
module.exports = app;
