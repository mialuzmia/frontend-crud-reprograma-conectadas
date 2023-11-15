// styles
import styles from "../styles/components/Card.module.css";

import { Link } from "react-router-dom";
import { Pencil, Trash } from "@phosphor-icons/react";
import { useDelete } from "../hooks/useDelete";

import ReactLoading  from "react-loading";


const Card = ({ anime, handleReload }) => {
  const {deleteAnime, loading} = useDelete();

  const handleClick = () => {
     deleteAnime(anime._id); 

      handleReload(anime._id)
  }


  return (
    <div className={styles.card__container}>
      <Link to={`/animes/${anime._id}`} className={styles.card__imgContainer}>
        <img src={anime.image} alt="anime" className={styles.card__img}/>
      </Link>

      <div className={styles.card__content}>
        <h2>{anime.title}</h2>
        
        <div className={styles.card__infoContainer}>
          <p>{`Gênero: ${anime.gender.join(", ")}`}</p>
          <p>Material original: {anime.origin}</p>
          <p>{`Autoria: ${anime.authorship.join(", ")}`}</p>
          <p>Estúdio: {anime.studio}</p>

        </div>

        <div className={styles.card__buttonsContainer}>
          <Link to={`/animes/${anime._id}/editar`}>
            <Pencil size={25} color="#ffffff" weight="fill"/>
          </Link>

          <button
            className={styles.card__deleteButton}
            onClick={handleClick}
            disabled={loading}
          >
            {loading ? (
              <ReactLoading type="spin" color="#ffffff" height={25} width={25} />
            ) : (
              <Trash size={25} color="#ffffff" weight="bold" />
            )}
          </button>

        </div>
      </div>
    </div>
  )
}

export default Card