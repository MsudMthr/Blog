import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query {
    authors {
      name
    }
  }
`;

export default function Home() {
  const { data } = useQuery(QUERY);

  console.log({ data });

  return <div className={styles.container}></div>;
}
