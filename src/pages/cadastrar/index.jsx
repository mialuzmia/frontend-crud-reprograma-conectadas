import FormCadastrar from "../../components/FormCadastrar";
import styles from "../../styles/pages/Cadastrar.module.css";



const Cadastrar = () => {
  return (
    <section className={`page ${styles.cadastrar__container}`}>
      <FormCadastrar />
    </section>
  )
}
export default Cadastrar;
