const typeDefs = require('./typeDefs');
const resolvers = require('./userSchema');
//not sure how to inport menu resolver, should this be one file called resolvers?

module.exports = { typeDefs, resolvers };