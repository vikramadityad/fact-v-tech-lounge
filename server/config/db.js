const mongoose = require('mongoose');

const db = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/FACT-V-LOUNGE', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('connected', () => {
    console.log('MongoDB Connected');
  });

  mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB Disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB Connection Closed');
      process.exit(0);
    });
  });
};

module.exports = db;
