const typeDefs = `
type User {
    name: String!
    email: String!
    password: String!
}

type Auth {

}

type Query {
    getUser(name: String!): User
}

type Mutation {
    createUser(name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): AuthPayload
}
`;

module.exports = typeDefs;
