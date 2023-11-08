// styles
import styles from "../../styles/pages/Home.module.css";
// components
import CardList from "../../components/CardList";
// hooks
import { useGet } from "../../hooks/useGet";


const Home = () => {
  const { data: animes } = useGet('https://fast-animes.onrender.com/animes/');

  console.log(animes);

  return (
    <section className={`page ${styles.home__container}`}>
      {animes && <CardList animes={animes}/>}
    </section>
  );
};

export default Home;
