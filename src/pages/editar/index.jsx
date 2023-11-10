// styles
import styles from "../../styles/pages/Editar.module.css";

// components
import FormEditar from "../../components/FormEditar";

import { useParams } from "react-router-dom";
import { useGet } from "../../hooks/useGet";

const Editar = () => {
  const { id } = useParams();

	const { data: anime } = useGet(`https://fast-animes.onrender.com/animes/${id}`);

  
  return (
    <div className={`page ${styles.editar__container}`}>
      {anime && <FormEditar 
        anime={anime}
      />}
    </div>
  );
};

export default Editar;
