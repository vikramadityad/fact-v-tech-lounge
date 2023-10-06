const User = require('./models/User');

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
                await user.save();
                return user;
            } catch (error) {
                //throw new Error('error'"I need to add graphQLError Still in utils/auth.js")
            }
        },
    },
};

module.exports = resolvers;