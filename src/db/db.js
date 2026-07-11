const mongoose = require("mongoose");
async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://complete-backend:Ko9hkV4dhsOjgI5o@complete-backend.tugcp67.mongodb.net/",
  );
  console.log("MongoDB connected");
}
module.exports = connectDB;
