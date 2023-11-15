// styles
import { useState } from "react";
import styles from "../styles/components/CardList.module.css";
import Card from "./Card";

const CardList = ({ animes }) => {

  const [animesList, setAnimesList] = useState(animes);


  const handleReload = (animeId) => {
    setAnimesList((prevAnimes) => prevAnimes.filter((anime) => anime._id !== animeId));
  };

  return (
    <div className={styles.cardList__container}>
      {animesList.map((anime) => (
        <Card 
          key={anime._id}
          anime={anime}
          handleReload={handleReload}
        />
      ))}
    </div>
  );
}

export default CardList