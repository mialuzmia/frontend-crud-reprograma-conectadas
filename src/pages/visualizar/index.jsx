// styles
import styles from "../../styles/pages/Visualizar.module.css";

import { useParams } from "react-router-dom";
import { useGet } from "../../hooks/useGet";

// components
import AnimePage from "../../components/AnimePage";


const Visualizar = () => {

  const { id } = useParams();

	const { data: anime } = useGet(`https://fast-animes.onrender.com/animes/${id}`);


  return (<div className={`page ${styles.visualizar__container}`}>
   
    {anime && 
    <AnimePage
      anime={anime}
      id={id}
    />}
  </div>);
};

export default Visualizar;
