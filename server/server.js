const express = require("express");
const { ApolloServer } = require("apollo-server-express"); // Correct import
const { authMiddleware } = require("./utils/auth");
const path = require("path");
const cors = require("cors");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/db");
// const { db } = require("./models/User");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Define the allowed origin(s)
const allowedOrigins = ["http://localhost:5173"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));
    app.get("*", (req, res) =>
      res.sendFile(path.join(__dirname, "../client/dist/index.html"))
    );
  }

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startServer();
