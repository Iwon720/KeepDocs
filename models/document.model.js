const mongoose = require("mongoose");
const Document = mongoose.model(
  "Document",
  new mongoose.Schema({
    name: String,
    innerData: Object,
  })
);
module.exports = Document;