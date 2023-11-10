// styles
import styles from "../styles/components/AnimePage.module.css";

import { Pencil, Trash } from "@phosphor-icons/react";
import { useDelete } from "../hooks/useDelete";
import { Link } from "react-router-dom";


const AnimePage = ({ anime, id }) => {
  const {deleteAnime} = useDelete();

  const handleClick = () => {
    deleteAnime(anime.id); 
  }

  return (
    <section className={styles.animePage__container}>
      <div className={styles.animePage__imgAndButtons}>
        <img src={anime.image} alt={`imagem do anime ${anime.title}`}/>

        <div className={styles.animePage__buttonsContainer}>
          <Link 
            to={`/animes/${id}/editar`}
            className={`${styles.animePage__buttons} ${styles.animePage__editButton}`}

          >
            <span>Edit</span>
            <Pencil size={20} color="var(--bg-color)" weight="fill"/>
          </Link>

          <button 
            className={`${styles.animePage__buttons} ${styles.animePage__deleteButton}`}
            onClick={handleClick}
          >
            <span>Delete </span>
            <Trash size={20} color="var(--bg-color)" weight="bold"/>
          </button>
          </div>
        </div>

          <div className={styles.animePage__content}>
            <h2>{ anime.title }</h2>
            <h3>{`Autoria: ${anime.authorship.join(", ")}`}</h3>
            <p>Gênero(s): 
              {anime.gender.map((gender) => (
              <span>{gender}</span>
            ))}
            </p>
            <p>Material Original: <span>{anime.origin}</span></p>

            <p>Estúdio: {anime.studio}</p>

            <p className={styles.animePage__description}>{anime.description}</p>
          </div>
    </section>
  )
}

export default AnimePage