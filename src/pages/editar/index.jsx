// styles
import { useParams } from "react-router-dom";
import FormEditar from "../../components/FormEditar";
import styles from "../../styles/pages/Editar.module.css";


const Editar = () => {
  const { id } = useParams();

  console.log(id);
  
  return (
    <div className={styles.container}>
      <FormEditar 
        id={id}
      />
    </div>
  );
};

export default Editar;
