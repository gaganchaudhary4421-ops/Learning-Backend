const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://Backend:b97PSKjF05hvDbtA@backend.jfrj2xn.mongodb.net/",
    );

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

module.exports = connectDB;
