// styles & images
import styles from "../styles/components/Header.module.css";
import logo from "../assets/imagens/logo2.png";

// componentes
import { FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";

const Header = () => {
  
  return (
      <header className={styles.header__container}>
        <img src={logo} alt="logo" />

        <div className={styles.header__socialContainer}>
            <a href="https://www.google.com/">
              <FacebookLogo size={25} color="#ffffff" weight="fill" />
            </a>
            <a href="https://www.google.com/">
              <InstagramLogo size={25} color="#ffffff" weight="fill" />
            </a>
            <a href="https://www.google.com/">
              <TwitterLogo size={25} color="#ffffff" weight="fill" />
            </a>
            <a href="https://www.google.com/">
              <YoutubeLogo size={25} color="#ffffff" weight="fill" />
            </a>
        </div>
    </header>
  )
}

export default Header