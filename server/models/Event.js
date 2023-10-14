const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  name: {
    type: String,
  },
  _id: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    contentType: String, 
  },
  description: {
    type: String,
  },
  fee: {
    type: Number,
  },

});

const Event = model('Event', eventSchema);

module.exports = Event;
