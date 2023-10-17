const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    name: String!
    email: String!
    password: String!
  }

  type AuthPayload {
    token: ID!
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
    date: String!
    startTime: String!
    endTime: String!
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
    createUser(name: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    addContactForm(
      name: String!
      email: String!
      message: String!
    ): ContactForm!

    updateUser(userId: ID!, updatedFields: UserInput!): User
    deleteUser(userId: ID!): DeleteUserPayload
    resetPassword(email: String!, password: String!): ResetPasswordResponse
  }

  input UserInput {
    name: String
    email: String
    password: String
  }

  type DeleteUserPayload {
    message: String!
  }

  type ResetPasswordResponse {
    message: String
    success: Boolean
  }
`;

module.exports = typeDefs;
