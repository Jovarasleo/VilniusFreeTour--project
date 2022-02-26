import Header from "../header";
import Footer from "../footer";
import styles from "./index.module.css";
function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
