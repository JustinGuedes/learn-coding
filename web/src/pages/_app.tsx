import "@component/styles/globals.css";
import "@component/styles/home.css";
import "@component/styles/variables.css";
import type { AppProps } from "next/app";
// install your custom style here

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
