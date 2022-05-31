const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    arrayOfIds: [mongoose.Schema.Types.ObjectId],
  })
);
module.exports = User;