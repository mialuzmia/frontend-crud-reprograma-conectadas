import { useParams } from "react-router-dom";
import styles from "../../styles/pages/Visualizar.module.css";

const Visualizar = () => {

  const { id } = useParams();

  console.log(id);

  return (<div className={`page ${styles.vizualizar__container}`}>
    <button>oioi</button>
  </div>);
};

export default Visualizar;
