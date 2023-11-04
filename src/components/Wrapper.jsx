// styles
import styles from "../styles/components/Wrapper.module.css";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Wrapper = ({ children, rota }) => {
  return (
    <div className={styles.wrapper__container}>
      <Header />
      <main className={styles.main__container}>
        <Sidebar />
        {children}
      </main>
      <Footer content="lorem"/>
    </div>
  );
};

export default Wrapper;