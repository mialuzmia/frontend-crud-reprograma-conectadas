// styles
import styles from "../../styles/pages/Editar.module.css";

// components
import FormEditar from "../../components/FormEditar";

import { useParams } from "react-router-dom";

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
