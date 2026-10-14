const express = require("express"); //express
const authRoutes = require("./routes/auth.routes"); //requiring auth routes
const app = express(); //requiring express
app.use(express.json());
module.exports = app; // exporting app
//app
