// styles
import styles from "../styles/components/CardList.module.css";
import Card from "./Card";

const CardList = ({ animes }) => {
  return (
    <div className={styles.cardList__container}>
      {animes.map((anime) => (
        <Card 
          key={anime._id} 
          id={anime._id} 
          img={anime.image} 
          title={anime.title}
          gender={anime.gender}
          origin={anime.origin}
          authorship={anime.authorship}
          studio={anime.studio}
        />
      ))}
    </div>
  );
}

export default CardList