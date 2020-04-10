import "../assets/css/style.scss";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />;
  return (
    <ThemeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
