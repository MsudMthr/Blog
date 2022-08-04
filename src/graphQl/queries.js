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

const GET_ALL_CATEGORIES = gql`
  query {
    categories {
      id
      cover {
        url
      }
      name
    }
  }
`;

export { GET_ALL_BLOGS, GET_ALL_CATEGORIES };
