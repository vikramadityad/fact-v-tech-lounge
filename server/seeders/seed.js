const db = require('../config/db');
const userSeeds = require('./userSeeds.json');
const menuSeeds = require('./menuSeeds.json');
const { User, Menu } = require('../models');

db.once('open', async () => {
    try {
      await Menu.deleteMany({});
      await Menu.create(menuSeeds);
  
      console.log('all done!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });