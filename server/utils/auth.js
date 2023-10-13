const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secretKey = "mysecretssshhhhhhh";
const expiration = "2h";

const AuthenticationError = new GraphQLError(
  "Authentication failed. User could not be authenticated.",
  {
    extensions: {
      code: "UNAUTHENTICATED",
    },
  }
);

const authMiddleware = function ({ req }) {
  console.log("Request Headers:", req.headers);
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  if (!token) {
    console.log("No token found.");
    return req;
  }

  try {
    const { data } = jwt.verify(token, secretKey, { maxAge: expiration });
    req.user = data;
    console.log("Token verified. User data:", data);
  } catch {
    console.error("Invalid token");
    console.error("Invalid token. Error:", error);
  }

  return req;
};

const signToken = function ({ email, name, _id }) {
  const payload = { email, name, _id };
  return jwt.sign({ data: payload }, secretKey, { expiresIn: expiration });
};

module.exports = {
  AuthenticationError,
  authMiddleware,
  signToken,
};
