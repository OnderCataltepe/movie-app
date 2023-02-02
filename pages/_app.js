import "../styles/globals.css";
import "../styles/animations.scss";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";

const BgTheme = dynamic(() => import("../components/background/BgTheme"), {
  ssr: false,
});
import Layout from "../layouts/page/Layout";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <BgTheme />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
