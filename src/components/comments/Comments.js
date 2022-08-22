import { useQuery } from "@apollo/client";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { GET_POST_COMMENTS } from "src/graphQl/queries";
import CommentCard from "./CommentCard";

const Comments = ({ slug }) => {
  const { data, loading, error } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });

  if (loading) return <h2>Loading ...</h2>;

  console.log(data);
  return (
    <Grid
      container
      xs={12}
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        my: 8,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography
          component={"p"}
          variant={"h6"}
          fontWeight={700}
          className="text-lightBlue"
        >
          نظرات
        </Typography>
      </Grid>
      {data.comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </Grid>
  );
};

export default Comments;
