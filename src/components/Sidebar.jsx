// styles
import styles from "../styles/components/Sidebar.module.css";
import { House, Plus, UserCircle, ArrowLeft } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <nav className={styles.sidebar__container}>
      {/* <Link to="/" className={styles.sidebar__backButton}>
        <ArrowLeft size={30} color="#fff" weight="bold"/>
      </Link> */}
      <div className={styles.sidebar__pageIcons}>
        <Link to="/">
          <House size={30} color="#fff" weight="bold"/>
        </Link>
        <Link to="/cadastrar">
          <Plus size={30} color="#fff" weight="bold"/>
        </Link>
        <Link to="/sobre">
          <UserCircle size={30} color="#fff" weight="bold"/>
        </Link>
      </div>

    </nav>
  )
}

export default Sidebar

