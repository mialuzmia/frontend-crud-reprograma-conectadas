import FormCadastrar from "../../components/FormCadastrar";
import styles from "../../styles/pages/Cadastrar.module.css";



const Cadastrar = () => {
  return (
    <section className={`page ${styles.cadastrar__container}`}>
      <h2>Cadastrar anime:</h2>
      <FormCadastrar />
    </section>
  )
}
export default Cadastrar;
