const User = require('../models/User');
const { createToken, AuthenticationError } = require('../utils/auth');

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
  },

  Mutation: {
    createUser: async (_, { name, email, password }) => {
      try {
        const user = new User({ name, email, password });
        await user.save();
        const token = createToken(user);
        return { token, user };
      } catch (error) {
        throw AuthenticationError;
      }
    },

    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user || !(await user.isCorrectPassword(password))) {
          throw AuthenticationError;
        }

        const token = createToken(user);
        return { token, user };
      } catch (error) {
        throw AuthenticationError;
      }
    },
  },
};

module.exports = resolvers;
