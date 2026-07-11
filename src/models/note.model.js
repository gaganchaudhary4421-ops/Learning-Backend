const mongoose = require("mongoose");
const noteSchema = new mongoose.schema({
  title: String,
  description: String,
});
const noteModel = mongoose.noteModel("notes", noteSchema);
module.exports = noteModel;
