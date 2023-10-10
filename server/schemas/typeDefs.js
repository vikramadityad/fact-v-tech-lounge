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

type Menu {
    name: String!
    id: String!
    category: String!
    image: String!
    description: String!
    includes: String!
    price: Float!
}

type Query {
    getUser(name: String!): User
    menuItems: [Menu]!
    menuItem(menuId: ID!): Menu
}

type Mutation {
    createUser(name: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
}
`;

module.exports = typeDefs;
