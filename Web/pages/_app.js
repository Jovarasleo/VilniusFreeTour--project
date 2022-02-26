import Layout from "../components/layout";
import Head from "next/head";
import "./index.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
