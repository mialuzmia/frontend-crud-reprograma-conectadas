// import { BooksProvider } from "./context/Books";
import { Router } from "./routes/app.routes";
import Wrapper from "./components/Wrapper";

import { usePost } from "./hooks/usePost";

//TODO: Substituir o Provider
function App() {

  const { response, error, postData } = usePost();

  const data = {
    "title": "teste add 17",
    "gender": "Shonen",
    "origin": "MANGA",
    "studio": "Pierrot",
    "description": "Asta e Yuno são órfãos que foram criados juntos numa igreja localizada no interior do reino de Clover. Nesse mundo todos possuem poder mágico (魔力 Maryoku?), nome dado à energia sobrenatural conhecida como mana quando esta habita um ser vivo. No entanto Asta nasceu sem mana. Em contrapartida, Yuno nasceu como grande poder mágico. Aos 5 anos de idade, os dois fazem um juramento entre si, visto no capítulo 1, em que eles competiriam para ver quem se tornaria o Rei Mago, o líder militar do Reino. Assim, desde essa idade, ambos treinam dia após dia, Asta aprimorando seus músculos, que eram sua única arma, e Yuno treinando sua Magia de Vento e seu controle mágico. A história acompanha os dois garotos que competem entre si para se tornar o Rei Mago, o cavaleiro mágico mais forte do reino de Clover. Mesmo sem magia, Asta tenta ser um cavaleiro mágico, assim sua jornada começa quando obtém o misterioso poder 'antimagia', que pode anular qualquer magia na obra. Assim, Asta, com sua antimagia e força física, e Yuno, com seus grandes poderes mágicos, talento natural e treinamento, começam a jornada.",
    "author": " Yūki Tabata",
  };
  
  const handleClick = async () => {
    postData('https://fast-animes.onrender.com/animes/add', data);
 
  }
  
  return (
    //<BooksProvider>
      <Wrapper>
        <button onClick={handleClick}>request button</button>
        {/* {response && <p className="success">{response}</p>}
        {error && <p className="error">{error}</p>} */}
        <Router />
      </Wrapper>
    //</BooksProvider> 
  );
}

export default App;
