import Layout from "../components/layout";
import { TourProvider } from "../context/ToursContext";
import "./index.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <TourProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TourProvider>
    </>
  );
}
