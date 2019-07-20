const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  image: { type: String },
  title: { type: String, required: true },
  author: { type: [String] },
  synopsis: String,
  date: { type: Date, default: Date.now },
  link: { type: String, required: true },
  src: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
