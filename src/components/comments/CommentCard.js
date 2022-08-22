import { Avatar, Box, Grid } from "@mui/material";
import React from "react";

const CommentCard = ({ comment }) => {
  const { text, name, feedback } = comment;
  return (
    <Grid xs={12} m={2} container className="flex flex-col rounded border p-3">
      <div className="flex items-center">
        <Avatar className="bg-fuchsia-500">{name[0]}</Avatar>
        <p className="mr-2 font-medium">{name}</p>
      </div>
      <p className="mt-3 mr-12">{text}</p>
      {feedback && (
        <div className="mt-2 rounded-md bg-gray-300 py-2 pr-2 sm:pr-10">
          <div className="flex items-center">
            <Avatar className="bg-blue-500">ا</Avatar>
            <p className="mr-2 font-medium">ادمین سایت</p>
          </div>
          <p className=" mr-12">{feedback}</p>
        </div>
      )}
    </Grid>
  );
};

export default CommentCard;
