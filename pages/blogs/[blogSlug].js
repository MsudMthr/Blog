import React from "react";
import { GET_ALL_BLOGS, GET_POST_INFO } from "../../src/graphQl/queries";
import Layout from "../../src/components/layout/Layout";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";
import { Avatar } from "@mui/material";
import Link from "next/link";
import { client } from "pages/_app";
import SimpleMap from "@/components/Map";
import CommentForm from "@/components/comments/CommentForm";
import Comments from "@/components/comments/Comments";

const BlogPage = ({ blog }) => {
  // destructuring data
  const {
    title,
    location,
    coverPhoto: { url },
    postAuthor,
    slug,
    text: { html },
    id,
  } = blog.post;
  console.log(blog.post);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-around py-4 sm:flex-row">
        <div className="flex w-11/12 justify-between sm:w-auto sm:flex-col sm:justify-start  ">
          <h1 className="py-1 text-2xl font-bold ">{title}</h1>
          <div className="flex items-center gap-2">
            <Avatar
              alt={postAuthor.name}
              src={postAuthor.avatar.url}
              sx={{ width: 32, height: 32 }}
            />
            <Link href={`/authors/${postAuthor.slug}`}>
              <a className="transition-all hover:text-darkBlue">
                {postAuthor.name}
              </a>
            </Link>
          </div>
        </div>
        <div className="relative  aspect-square h-44 w-11/12 sm:w-4/12">
          <Image src={url} alt={title} layout="fill" className="rounded-lg" />
        </div>
      </div>
      <div
        className="unreset px-2 leading-7"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }}
      ></div>
      {location && (
        <SimpleMap
          lat={location.latitude}
          lng={location.longitude}
          text={postAuthor.name}
        />
      )}
      <CommentForm slug={slug} />
      <Comments slug={slug} />
    </Layout>
  );
};

export default BlogPage;

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_ALL_BLOGS,
  });
  const paths = await data.posts.map((post) => {
    return {
      params: { blogSlug: `${post.slug}` },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.blogSlug;

  const blog = await client.query({
    query: GET_POST_INFO,
    variables: { slug },
  });
  return {
    props: {
      blog: blog.data,
      slug,
    },
  };
};
