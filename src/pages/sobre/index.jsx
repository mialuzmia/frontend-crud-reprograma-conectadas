import styles from "../../styles/pages/Sobre.module.css";
import imgtai from "../../assets/imagens/tai.jpg";
import imgsarah from "../../assets/imagens/sarah.jpeg";
import imgjamile from "../../assets/imagens/jamile.jpeg"
import imgmia from "../../assets/imagens/mia.jpeg"
import CardDev from "../../components/CardDev";

// import dev from "../../dev.json"



const Sobre = () => {

  const devs = [
      {key: "1", 
      image: imgtai,
      name: "Tainã Raio",
      subtitlle: "Front-end",
      description: "Gosto de acender uma vela aromatizada no final do dia e relaxar. Amo cantar, dançar e assistir série junto com uma comidinha gostosa",
      github: "https://github.com/TainaRaio"},
      {key: "2", 
      image: imgmia,
      name: "Mia Azevedo",
      subtitlle: "Front-end",
      description: " Gosto de livros de fantasia, animações, jogos antigos e da minha gatinha Erin 🐱",
      github: "https://www.linkedin.com/in/mialuzmia/"},
      {key: "3", 
      image: imgsarah,
      name: "Sarah",
      subtitlle: "Back-end",
      description: "Gosto de ",
      github: "https://www.linkedin.com/in/sarah-bernardino/"},
      {key: "4", 
      image: imgjamile,
      name: "Jamile",
      subtitlle: "Back-end",
      description: " Gosto de Rock e filmes de terror, nos finais de semanas gostei de tomar um vinho vegano em casa, assistir animes e comer acarajé. Meus hobbies são basicamente esses: ficar em casa, com minhas filhas, ouvir Rock, ver filmes e séries de terror e muito anime...  ",
      github: "https://www.linkedin.com/in/jamile-santana-da-silva/"}
  ];

  return (
    
    <div className={styles.containerDevs}>
      {devs.map((dev) => (
        <CardDev
          key={dev.key} 
          image={dev.image}
          name={dev.name}
          subtitlle={dev.subtitlle}
          description={dev.description}
          github={dev.github}

        />
       

      )
      
      )}

    </div>
    
  )
}

export default Sobre