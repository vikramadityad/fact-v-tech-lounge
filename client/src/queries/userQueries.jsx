import { gql } from '@apollo/client';

export const GET_USER_PROFILE = gql`
  query GetUserProfile {
    getUser(name: "Chris") {
      name
      email
    }
  }
`;