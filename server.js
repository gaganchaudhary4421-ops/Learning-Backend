//server.js
const app = require("./src/app"); //accessing app.js file
app.listen(3000, () => {
  //starting the server at port 3000
  console.log("Server is running at port 3000");
});
