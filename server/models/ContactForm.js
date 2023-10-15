const mongoose = require("mongoose");

const ContactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  message: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 500,
  },
});

module.exports = mongoose.model("ContactForm", ContactFormSchema);
