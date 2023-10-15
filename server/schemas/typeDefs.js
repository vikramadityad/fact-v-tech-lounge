const { gql } = require("apollo-server-express");

const typeDefs = gql`
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
    _id: ID!
    name: String!
    category: String!
    image: String!
    description: String!
    includes: [String]!
    price: Float!
  }

  type Event {
    _id: ID!
    name: String!
    image: String!
    description: String!
    fee: Float!
  }

  type ContactForm {
    _id: ID!
    name: String!
    email: String!
    message: String!
  }

  type Query {
    getUser(name: String!): User
    menuItems: [Menu]!
    menuItem(menuId: ID!): Menu
    events: [Event]!
    event(eventId: ID!): Event
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): User!
    addContactForm(
      name: String!
      email: String!
      message: String!
    ): ContactForm!
  }
`;

module.exports = typeDefs;
