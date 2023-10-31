import axios from "axios";
import { useEffect, useState } from "react";



export const usePost = () => {

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  

  const postData = async (url, data, headers) => {
    setResponse(null);
    setError(null);

    // transforma o objeto a ser enviado na requisição em json
    const dataJSON = JSON.stringify(data);

      setLoading(true);

      try {
        const response = await axios.post(url, dataJSON, {
          headers: {
              'Content-Type': 'application/json', //passa 2 headers padrao e se outros forem passados nop parametro, da um spread e adciona eles
              'Accept': 'application/json',
              ...headers,
          }
        });

        setResponse(JSON.stringify(response.data));
        console.log(response);


      } catch (error) {
        setError(JSON.stringify(error));
     
      }

      setLoading(false);
    };
  
    return { response, error, loading, postData};
  };