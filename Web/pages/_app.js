import Layout from "../components/layout";
import { TourProvider } from "../context/ToursContext";
import { DynamicPageProvider } from "../context/DynamicPageContext";
import "./index.css";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DynamicPageProvider>
        <TourProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TourProvider>
      </DynamicPageProvider>
    </>
  );
}
