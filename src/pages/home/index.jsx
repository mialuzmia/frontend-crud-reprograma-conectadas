import CardList from "../../components/CardList";
import { useGet } from "../../hooks/useGet";
import styles from "../../styles/pages/Home.module.css";


const Home = () => {
  const { data: animes } = useGet('https://fast-animes.onrender.com/animes/');

  console.log(animes);

  return (
    <section className={`page ${styles.home__container}`}>
      <CardList />
    </section>
  );
};

export default Home;
