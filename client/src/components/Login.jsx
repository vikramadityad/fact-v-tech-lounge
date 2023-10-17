import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import '../styles/Login.css';
import '../styles/PrimaryButton.css';
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

const RESET_PASSWORD = gql`
  mutation ResetPassword($email: String!, $password: String!) {
    resetPassword(email: $email, password: $password) {
      message
    }
  }
`;

const Auth = ({ onClose, onLogin}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [showResetPassword, setShowResetPassword] = useState(false)

  const [loginUser] = useMutation(LOGIN_USER);
  const [createUser] = useMutation(CREATE_USER);
  const [resetPassword] = useMutation(RESET_PASSWORD);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (showResetPassword) {
        // Handle resetting password with a new password
        const { data } = await resetPassword({
          variables: { email, password: newPassword },
        });

        console.log('Reset password success:', data);
      } else if (isLogin) {
        // Handle login
        const { data } = await loginUser({
          variables: { email, password },
        });

        console.log('Login success:', data);

        if (data && data.login && data.login.token) {
          AuthService.login(data.login.token);
          onLogin(true);
          console.log('Auth component rendered');
        } else {
          console.error('No token received after login');
        }
      } else {
        // Handle sign up
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

  const renderResetPasswordForm = () => (
    <div>
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
        New Password:
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </label>
      <br />
    </div>
  );

  return (
    <div className="auth-container">
      <div className="auth-content">
        <h2>{showResetPassword ? 'Reset Password' : isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && !showResetPassword && (
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
          {!showResetPassword && (
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          )}
          <br />
          {!showResetPassword && (
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          )}
          <br />
          <button className="btn btn-primary" type="submit">
            {showResetPassword ? 'Reset Password' : isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        {!showResetPassword && (
          <p onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
          </p>
        )}
        {!showResetPassword && (
          <p onClick={() => setShowResetPassword(true)}>Forgot Password?</p>
        )}
        {showResetPassword && renderResetPasswordForm()}
      </div>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Auth;