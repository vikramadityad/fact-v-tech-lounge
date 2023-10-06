const User = require('../models/User');

const resolvers = {
    Query: {
        getUser: async (_, { name }) => {
            try {
                const user = await User.findOne({ name });
                return user;
            } catch (error) {
              //throw new Error('Error'" I need to add GraphQLError Still in Utils/auth.js")
            }
        },
    },

    Mutation: {
        createUser: async (_, { name, email, password }) => {
            try {
                const user = new User({ name, email, password });
                const token = createToken(user);
                return { token, profile };
            } catch (error) {
                //throw new Error('error'"I need to add graphQLError Still in utils/auth.js")
            }
        login: async (_, { email, password }) => {
            const user = await user.isCorrectPassword(password);

            if (!user) {
                //throw new Error This needs to be added in auth.js
            }

        const correctPw = await profile.isCorrectPassword(password);

        if (!correctPw) {
            //throw new Error this needs to be added in auth.js
        }

        const token = createToken(user);
        return { token, user };
        }
      },
   },
};

module.exports = resolvers;