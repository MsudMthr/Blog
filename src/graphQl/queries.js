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
        slug
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
      categorySlug
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
      field
    }
  }
`;

const GET_POST_INFO = gql`
  query GetPostInfo($slug: String!) {
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

const GET_AUTHOR_INFO = gql`
  query GetUserInfo($slug: String!) {
    author(where: { slug: $slug }) {
      id
      avatar {
        url
      }
      description {
        html
      }
      field
      name
      posts {
        coverPhoto {
          url
        }
        title
        slug
      }
      slug
    }
  }
`;

const GET_CATEGORY_INFO = gql`
  query GetCategoryInfo($id: ID!) {
    category(where: { id: $id }) {
      id
      categorySlug
      cover {
        url
      }
      name
      posts {
        id
        slug
        title
      }
    }
  }
`;

export {
  GET_ALL_BLOGS,
  GET_ALL_CATEGORIES,
  GET_ALL_AUTHORS,
  GET_POST_INFO,
  GET_AUTHOR_INFO,
  GET_CATEGORY_INFO,
};
