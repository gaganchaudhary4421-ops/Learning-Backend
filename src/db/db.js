const mongoose = require("mongoose");
async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://Backend:b97PSKjF05hvDbtA@backend.jfrj2xn.mongodb.net/backend",
  );
  console.log("Connected to MongoDB");
}
module.exports = connectDB;
