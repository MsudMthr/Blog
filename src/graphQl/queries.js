import { gql } from "@apollo/client";

const GET_ALL_BLOGS = gql`
  query {
    posts {
      slug
      title
      coverPhoto {
        url
      }
      id
      author
      published_time
      text {
        text
      }
    }
  }
`;

export { GET_ALL_BLOGS };
