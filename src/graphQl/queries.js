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
      published_time
      text {
        text
      }
      postAuthor {
        avatar {
          url
        }
        name
        id
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

const GET_ALL_AUTHORS = gql`
  query {
    authors {
      avatar {
        url
      }
      id
      name
      slug
    }
  }
`;

const GET_POST_INFO = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      coverPhoto {
        url
      }
      text {
        html
      }
      title
      postAuthor {
        avatar {
          url
        }
        name
        slug
      }
      location {
        latitude
        longitude
      }
    }
  }
`;

export { GET_ALL_BLOGS, GET_ALL_CATEGORIES, GET_ALL_AUTHORS, GET_POST_INFO };
