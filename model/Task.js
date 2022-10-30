const mongoose = require("mongoose");

const taskShema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is needed"],
    trim: true,
    maxlength: [20, "Must not more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskShema);
