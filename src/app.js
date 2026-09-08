const express = require("express");
const app = express();
app.use(express.json());
app.get("/create-post", (req, res) => {});
module.exports = app;
