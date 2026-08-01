const mongoose = require("mongoose");//requiring mongoose
const postSchema = new.mongoose.Schema({
    image: String,
    caption: String,
})
const postModel = mongoose.model("post",postModel);
module.exports = postModel;
