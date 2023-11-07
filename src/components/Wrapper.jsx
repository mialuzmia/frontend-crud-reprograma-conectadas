import styles from "../styles/components/Wrapper.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Wrapper = ({ children, rota }) => {
  return (
    <div className={styles.wrapper__container}>
      <Header />
      <div className={styles.main__container}>
          <Sidebar />
        <div className={styles.content}>
          {children}
        </div>
      </div>
      <Footer content="lorem" />
    </div>
  );
};

export default Wrapper;
