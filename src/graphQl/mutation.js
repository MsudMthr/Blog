const { gql } = require("@apollo/client");

const CREATE_COMMENT = gql`
  mutation CreateComment(
    $name: String!
    $email: String!
    $text: String!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        text: $text
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;

export { CREATE_COMMENT };
