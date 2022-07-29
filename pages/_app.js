import "../styles/globals.css";
import "../styles/font.css";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Header from "../src/components/Header";
import { ThemeProvider } from "@mui/material";
import theme from "../src/mui/theme";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Header>
          <Component {...pageProps} />
        </Header>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
