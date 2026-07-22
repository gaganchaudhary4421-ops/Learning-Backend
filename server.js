const app = require("./src/app");//importing app
const connectDB = require("./src/db/db.js");

connectDB();
app.listen(3000, () => {//port no. 3000
  console.log("server is running on port 3000"); //this message will be displayed.
});
