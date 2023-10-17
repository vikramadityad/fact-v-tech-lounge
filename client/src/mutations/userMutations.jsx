import { gql } from '@apollo/client';

export const DELETE_USER = gql`
  mutation($userId: ID!) {
    deleteUser(userId: $userId) {
      message
    }
  }
`;
