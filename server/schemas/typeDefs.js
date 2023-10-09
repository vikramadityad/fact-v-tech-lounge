const typeDefs = `
type User {
    name: String!
    email: String!
    password: String!
}

type AuthPayload {
    token: String
    user: User
  }

type Query {
    getUser(name: String!): User
}

type Mutation {
    createUser(name: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
}
`;

module.exports = typeDefs;
