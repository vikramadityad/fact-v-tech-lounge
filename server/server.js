const express = require("express");
const { ApolloServer } = require("apollo-server-express"); // Correct import
const { authMiddleware } = require("./utils/auth");
const path = require("path");
const cors = require("cors");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/db");

// sk_test_51O0vycGtO1FmclxaKduF3KjqcviPCyVuHMKn1XxEy8YAtEYbU86FyI4mi39vFkTxfbHnx9AEHD1oemJbofkMS7mK00cBdr9uvb
// Boot camp platter stripe id: price_1O1b3SGtO1FmclxamkHwD4Qu

const stripe = require("stripe")(
  "sk_test_51O0vycGtO1FmclxaKduF3KjqcviPCyVuHMKn1XxEy8YAtEYbU86FyI4mi39vFkTxfbHnx9AEHD1oemJbofkMS7mK00cBdr9uvb"
);

// const { db } = require("./models/User");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Needed for stripe
app.use(express.static("public"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Define the allowed origin(s)
const allowedOrigins = [ process.env.CLIENT_URL || "http://localhost:5173" ];

// Stripe Checkout Post Route
app.post("/checkout", async (req, res) => {
  /*
  req.body.items
  [
    {
      _id: 1,
      quantity: 3
    }
  ]

  stripe wants 
  [
    {
      price: 1,
      quantity: 3
    }
  ]
  */
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    // Change to a format that Stripe understands
    lineItems.push({
      price: item._id,
      quantity: item.quanitity,
    });
  });

  // Create a Stripe session with the line Items
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  // Send the url to the front end and turn the response into json
  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

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
