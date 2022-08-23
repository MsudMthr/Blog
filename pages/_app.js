import "../styles/globals.css";
import "../styles/font.css";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import theme from "../src/mui/theme";
import { SessionProvider } from "next-auth/react";
export const client = new ApolloClient({
  uri: "https://api-us-west-2.hygraph.com/v2/cl63tqo0s754701uk1pnzg0s7/master",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
