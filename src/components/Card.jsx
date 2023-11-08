// styles
import styles from "../styles/components/Card.module.css";

import { Link } from "react-router-dom";
import { Pencil, Trash } from "@phosphor-icons/react";

const Card = ({ id, img, title, gender, origin, author, studio }) => {
  return (
    <div className={styles.card__container}>
      <img src={img} alt="anime" className={styles.card__img}/>
      <div className={styles.sidebar__content}>
        <h2>{title}</h2>
        
        <div className={styles.sidebar__infoContainer}>
        <p>{`Gênero: ${gender.join(", ")}`}</p>
        <p>Material original: {origin}</p>
        <p>Autor(a): {author}</p>
        <p>Estúdio: {studio}</p>

        </div>

        <div className={styles.sidebar__buttonsContainer}>
          <Link to={`/livros/${id}/editar`}>
            <Pencil size={25} color="#ffffff" weight="fill"/>
          </Link>
          <button className={styles.sidebar__deleteButton}>
            <Trash size={25} color="#ffffff" weight="bold"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card