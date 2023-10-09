const User = require('../models/User');
const { signToken, AuthenticationError } = require('../utils/auth');

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
        const existingUser = await User.findOne({ email });

        if (existingUser) {
          throw new Error('User with this email already exists');
        }

        const user = new User({ name, email, password });
        await user.save();
        
        const token = signToken(user);
        console.log('Generated Token:', token);
        return { token, user };
      } catch (error) {
        throw error;
      }
    },

    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user || !(await user.isCorrectPassword(password))) {
          console.error('Authentication failed. Invalid credentials.');
          throw AuthenticationError;
        }

        const token = signToken(user);
        console.log('User authenticated. Token:', token);
        return { token, user };
      } catch (error) {
        console.error('Authentication failed. Error:', error);
        throw AuthenticationError;
      }
    },
  },
};

module.exports = resolvers;
