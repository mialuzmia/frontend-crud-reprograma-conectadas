// styles
import styles from "../styles/components/Card.module.css";

import { Link } from "react-router-dom";
import { Pencil, Trash } from "@phosphor-icons/react";
import { useDelete } from "../hooks/useDelete";

const Card = ({ id, img, title, gender, origin, authorship, studio }) => {
  const {deleteAnime} = useDelete();

  const handleClick = () => {
     deleteAnime(id); 

      
  }


  return (
    <div className={styles.card__container}>
      <Link to={`/animes/${id}`} className={styles.card__imgContainer}>
        <img src={img} alt="anime" className={styles.card__img}/>
      </Link>
      <div className={styles.sidebar__content}>
        <h2>{title}</h2>
        
        <div className={styles.sidebar__infoContainer}>
        <p>{`Gênero: ${gender.join(", ")}`}</p>
        <p>Material original: {origin}</p>
        <p>{`Autoria: ${authorship.join(", ")}`}</p>
        <p>Estúdio: {studio}</p>

        </div>

        <div className={styles.sidebar__buttonsContainer}>
          <Link to={`/animes/${id}/editar`}>
            <Pencil size={25} color="#ffffff" weight="fill"/>
          </Link>

          <button 
            className={styles.sidebar__deleteButton}
            onClick={handleClick}
          >
            <Trash size={25} color="#ffffff" weight="bold"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card