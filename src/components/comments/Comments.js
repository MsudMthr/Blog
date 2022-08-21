import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POST_COMMENTS } from "src/graphQl/queries";

const Comments = ({ slug }) => {
  const { data, loading, error } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });

  if (loading) return <h2>Loading ...</h2>;

  console.log(data);
  return <div></div>;
};

export default Comments;
