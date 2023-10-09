const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const path = require('path');
const port = process.env.PORT || 3001;
const db = require('./config/db');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/graphql' expressMiddleware(server, {
    context: authMIddleware
}));