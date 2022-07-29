import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import Image from "next/image";
import BlogIcon from "../assets/blogger-blog-svgrepo-com.svg";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" flex={1}>
            بلاگ
          </Typography>
          <Image
            src={BlogIcon}
            alt="Blog"
            width={30}
            height={30}
            
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
