import { gql } from "@apollo/client";

const GET_ALL_BLOGS = gql`
  query {
    posts {
      slug
      title
      coverPhoto {
        url
        avatarAuthor {
          avatar {
            url
          }
        }
      }
      id
    }
  }
`;

export {GET_ALL_BLOGS}