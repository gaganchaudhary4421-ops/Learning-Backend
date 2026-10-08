require("dotenv").config(); //requiring .env

const dns = require("dns"); //solve dns problem
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = require("./src/app");
const ConnectDB = require("./src/db/db"); //requiring db

ConnectDB();
addning and connecting database

app.listen(3000, () => {
  //starting server
  console.log("Server is running on port 3000");
});
