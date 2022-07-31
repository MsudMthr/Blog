import "../styles/globals.css";
import "../styles/font.css";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import theme from "../src/mui/theme";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
