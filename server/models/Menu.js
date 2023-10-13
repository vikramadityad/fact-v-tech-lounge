const { Schema, model } = require("mongoose");

const menuSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    contentType: String,
  },

  description: {
    type: String,
    required: true,
  },
  includes: {
    type: [String],
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Menu = model("Menu", menuSchema);

module.exports = Menu;
