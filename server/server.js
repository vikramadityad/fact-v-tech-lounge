const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { authMiddleware } = require('./utils/auth');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });


const startServer = async () => {
    await connectDB();
    await server.start();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
  
  
    // if (process.env.NODE_ENV === 'production') {
    //   app.use(express.static(path.join(__dirname, '../client/dist')));
    //   app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/dist/index.html')));
    // }
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../client/dist/index.html')));
    app.use('/graphql', expressMiddleware(server, { context: authMiddleware }));

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}!`);
    });
  };
  
  startServer();
