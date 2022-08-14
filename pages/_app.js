import "../styles/globals.css";
import "../styles/font.css";

import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import theme from "../src/mui/theme";
import { useApollo } from "../src/graphQl/apollo";

function MyApp({ Component, pageProps }) {
  const apolloCLient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloCLient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
