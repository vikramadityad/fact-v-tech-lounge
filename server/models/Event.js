const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      _id: {
          type: String,
          required: true,
        },
        image: {
        data: Buffer, 
        contentType: String,
        required: true,
       },
       description: {
        type: String,
        required: true,
       },
        fee: {
        type: Number,
        required: true,
       }    
    });
    
    const Event = model('Event', eventSchema);
    
    module.exports = Event;