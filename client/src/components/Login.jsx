import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import '../styles/Login.css';
import AuthService from '../utilities/auth';

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
  mutation CcreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      token
      user {
        name
        email
      }
    }
  }
`;

const Auth = ({ onClose, onLogin}) => {
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

     
        console.log('Login success:', data);

        if (data && data.login && data.login.token) {
  
          AuthService.login(data.login.token);
          onLogin(true);
          console.log('Auth component rendered')
        } else {
          console.error('No token received after login');
        }
      } else {
        const { data } = await createUser({
          variables: { name, email, password },
        });


        console.log('Signup success:', data);

        if (data && data.createUser && data.createUser.token) {

          AuthService.login(data.createUser.token);
        } else {
          console.error('No token received after signup');
        }
        onLogin(true);
      }


      onClose();
    } catch (error) {
      console.error('Authentication failed:', error.message);
      console.error('GraphQL Errors:', error.graphQLErrors);
      console.error('Network Error:', error.networkError);

      onLogin(false);
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
