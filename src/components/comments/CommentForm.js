import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { CREATE_COMMENT } from "src/graphQl/mutation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const CommentForm = ({ slug }) => {
  const [commentData, setCommentData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const changeCommentFormHandler = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
    console.log(commentData);
  };

  const [sendComment, { data, loading }] = useMutation(CREATE_COMMENT, {
    variables: {
      name: commentData.name,
      email: commentData.email,
      text: commentData.comment,
      slug,
    },
  });

  const sendCommentHandler = () => {
    if ((commentData.comment, commentData.name, commentData.comment)) {
      sendComment();
    } else {
      toast.warn("لطفا همه اطلاعات را وارد کنید", {
        position: "top-center",
      });
    }
  };

  if (data) {
    toast.success("نظر شما ارسال شد و منتظر تایید میباشد", {
      position: "top-center",
      style: { fontSize: "12px" },
    });
  }

  return (
    <Grid
      dir="rtl"
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        my: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography
          component={"p"}
          variant={"h6"}
          fontWeight={700}
          className="text-lightBlue"
        >
          فرم ارسال نظر
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          value={commentData.name}
          onChange={(e) => changeCommentFormHandler(e)}
          label="نام کاربری"
          variant="outlined"
          className="w-full"
          name="name"
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          value={commentData.email}
          onChange={(e) => changeCommentFormHandler(e)}
          label="ایمیل"
          variant="outlined"
          className="w-full"
          name="email"
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          value={commentData.comment}
          onChange={(e) => changeCommentFormHandler(e)}
          label="نظر"
          variant="outlined"
          className="w-full"
          name="comment"
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <Button
          onClick={sendCommentHandler}
          variant="contained"
          className={"font-medium"}
        >
          ارسال
        </Button>
      </Grid>
      <ToastContainer rtl={true} />
    </Grid>
  );
};

export default CommentForm;
