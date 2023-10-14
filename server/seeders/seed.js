const db = require("../config/db");
const userSeeds = require("./userSeeds.json");
const menuSeeds = require("./menuSeeds.json");
const eventSeeds = require("./eventSeeds.json");
const { User, Menu, Event } = require("../models");

db.once("open", async () => {
  try {
    await Menu.deleteMany({});
    await Menu.create(menuSeeds);

    await User.deleteMany({});
    await User.create(userSeeds);

    await Event.deleteMany({});
    await Event.create(eventSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
