import { useGet } from "../../hooks/useGet";
import styles from "../../styles/pages/Home.module.css";


const Home = () => {
  const { data: animes } = useGet('https://fast-animes.onrender.com/animes/');

  console.log(animes);

  return <div className={styles.container}>Home</div>;
};

export default Home;
