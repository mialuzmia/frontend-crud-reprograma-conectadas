// styles
import styles from '../styles/components/Footer.module.css'



const Footer = ({content}) => {
  return (
    <footer className={styles.footerContainer}>
    
       <h2 className={styles.footerContent}> Criado por {content}</h2> 
    </footer>
  )
}

export default Footer
