// styles
import styles from "../../styles/pages/Home.module.css";
// components
import CardList from "../../components/CardList";
// hooks
import { useGet } from "../../hooks/useGet";

import ReactLoading  from "react-loading";



const Home = () => {
  const { data: animes, loading } = useGet('https://fast-animes.onrender.com/animes/');

  // console.log(animes);

  return (
    <section className={`page ${styles.home__container}`}>
      {animes && <CardList animes={animes}/>}
      {loading && <ReactLoading type="spin" color="#1366d3"  />}
    </section>
  );
};

export default Home;
