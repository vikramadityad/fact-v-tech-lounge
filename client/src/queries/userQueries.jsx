import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser ($name: String!) {
    getUser(name: $name){
      name
      email
    }
  }
`;