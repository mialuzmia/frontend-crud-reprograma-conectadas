import axios from "axios";
import { useEffect, useState } from "react";



export const usePatch = () => {

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  

  const editAnime = async (data, id,  headers) => {

    setResponse(null);
    setError(null);

    // transforma o objeto a ser enviado na requisição em json
    const dataJSON = JSON.stringify(data);

    setLoading(true);

    try {
      const response = await axios.patch(`https://fast-animes.onrender.com/animes/update/${id}`, dataJSON, {
        headers: {
            'Content-Type': 'application/json', //passa 2 headers padrao e se outros forem passados nop parametro, da um spread e adciona eles
            'Accept': 'application/json',
            ...headers,
        }
      });

      setResponse(JSON.stringify(response.data));
      
      console.log(`${response.data.message}\nStatus: ${response.status}.`)

    } 
    catch (error) {
      setError(JSON.stringify(error));
      console.log('Um erro ocorreu ao tentar editar um item: ' + error);
    }

    setLoading(false);
  };
  
  const reset = () => {
    setError(null);
    setResponse(null);
    setLoading(false);
  }

    return { response, error, loading, editAnime, reset};
  };