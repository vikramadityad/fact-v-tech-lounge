const User = require("../models/User");
const { signToken, AuthenticationError } = require("../utils/auth");
const Menu = require("../models/Menu");
const Event = require("../models/Event");

const resolvers = {
  Query: {
    getUser: async (_, { name }) => {
      try {
        const user = await User.findOne({ name });
        return user;
      } catch (error) {
        throw AuthenticationError;
      }
    },
    menuItems: async () => {
      try {
        const menuItems = await Menu.find();
        return menuItems;
      } catch (error) {
        console.error("Error fetching menu items:", error);
        throw error; // Rethrow the error
      }
    },
    menuItem: async (parent, { menuId }) => {
      return await Menu.findById({ _id: menuId });
    },
    events: async () => {
      try {
        const events = await Event.find();
        return events;
      } catch (error) {
        console.error("Error fetching events:", error);
        throw error; // Rethrow the error
      }
    },
    event: async (parent, { eventId }) => {
      return await Event.findById({ _id: eventId });
    },
  },
  Mutation: {
    createUser: async (_, { name, email, password }) => {
      try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
          throw new Error("User with this email already exists");
        }

        const user = new User({ name, email, password });
        await user.save();

        const token = signToken(user);
        console.log("Generated Token:", token);
        return { token, user };
      } catch (error) {
        throw error;
      }
    },

    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user || !(await user.isCorrectPassword(password))) {
          throw AuthenticationError;
        }

        const token = signToken(user);
        return { token, user };
      } catch (error) {
        throw AuthenticationError;
      }
    },
    addContactForm: async (_, { name, email, message }) => {
      try {
        const contactForm = new ContactForm({ name, email, message });
        await contactForm.save();
        return contactForm;
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = resolvers;
