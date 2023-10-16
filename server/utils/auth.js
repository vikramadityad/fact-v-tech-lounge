const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
// require('dotenv').config();

const secret = crypto.randomBytes(32).toString('hex');
// const secret = process.env.secret
const expiration = '2h';

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    // console.log('Raw Authorization Header Value:', req.headers.authorization);

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    // console.log('Token in authMiddleware:', token);

    if (!token) {
      // console.log('No token found.');
      return req;
    }

    return req;
  },
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
