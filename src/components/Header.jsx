// styles & images
import styles from "../styles/components/Header.module.css";
import logo from "../assets/imagens/logo.png";

// componentes
import { FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";

const Header = () => {
  
  return (
      <header className={styles.header__container}>
        <img src={logo} alt="logo" />

        <div className={styles.header__socialContainer}>
            <FacebookLogo size={32} color="#ffffff" weight="fill" />
            <InstagramLogo size={32} color="#ffffff" weight="fill" />
            <TwitterLogo size={32} color="#ffffff" weight="fill" />
            <YoutubeLogo size={32} color="#ffffff" weight="fill" />

        </div>
    </header>
  )
}

export default Header