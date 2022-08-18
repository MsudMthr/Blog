import Layout from "@/components/layout/Layout";
import BlogAuthorsCard from "@/shared/BlogAuthorsCard";
import BlogCard from "@/shared/BlogCard";
import { Avatar, Divider } from "@mui/material";
import { client } from "pages/_app";
import React from "react";
import sanitizeHtml from "sanitize-html";
import { GET_ALL_AUTHORS, GET_AUTHOR_INFO } from "src/graphQl/queries";

const AuthorPage = ({ author }) => {
  const { avatar, name, description, field, slug, id, posts } = author;
  console.log(posts);
  return (
    <Layout>
      <div className="my-10 flex flex-col items-center gap-2 px-2 text-justify sm:text-right">
        <Avatar src={avatar.url} className={"h-40 w-40"} />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>{field}</p>
        <div
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(description.html) }}
          className="leading-8"
        ></div>

        <div className={`${posts.length ? "w-full flex flex-col items-center " : "hidden" }`}>
          <Divider className="w-2/3 bg-dark" />
          <p className="mt-3 self-start text-2xl text-darkBlue">مقالات</p>
          <div className="my-5">
            {posts.map((post) => (
              <BlogAuthorsCard blogData={post} key={post.slug} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthorPage;

export const getStaticPaths = async (context) => {
  const { data } = await client.query({ query: GET_ALL_AUTHORS });
  const paths = await data.authors.map((author) => {
    return {
      params: { authorSlug: `${author.slug}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.authorSlug;

  const author = await client.query({
    query: GET_AUTHOR_INFO,
    variables: { slug },
  });

  return {
    props: {
      author: author.data.author,
    },
  };
};
