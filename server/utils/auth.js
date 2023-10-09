const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = "will-enter-later"
const expiration = "2h";

const AuthenticationError = new GraphQLError('Authentication failed. User could not be authenticated.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  });
  
  const authMiddleware = function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
  
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
  
    if (!token) {
      return req;
    }
  
    try {
      const { data } = jwt.verify(token, secretKey, { maxAge: tokenExpiration });
      req.user = data;
    } catch {
      console.error('Invalid token');
    }
  
    return req;
  };
  
  const signToken = function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secretKey, { expiresIn: tokenExpiration });
  };
  
  module.exports = {
    AuthenticationError,
    authMiddleware,
    signToken,
  };