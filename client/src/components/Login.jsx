// Auth.jsx
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import '../styles/Login.css';

const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        name
        email
      }
    }
  }
`;

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      token
      user {
        name
        email
      }
    }
  }
`;

const Auth = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const [loginUser] = useMutation(LOGIN_USER);
  const [createUser] = useMutation(CREATE_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const { data } = await loginUser({
          variables: { email, password },
        });

        // Handle login response
        console.log('Login success:', data);
      } else {
        const { data } = await createUser({
          variables: { name, email, password },
        });

        // Handle signup response
        console.log('Signup success:', data);
      }

      // Close the modal
      onClose();
    } catch (error) {
      console.error('Authentication failed:', error.message);
      // Handle authentication error, show a message to the user, etc.
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          )}
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
        </p>
      </div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Auth;
