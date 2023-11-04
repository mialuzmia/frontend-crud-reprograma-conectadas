import axios from "axios";
import { useState } from "react";

export const useDelete = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
      const deleteAnime = async (id, options) => {
        setResponse(null);
        setError(null); 
        
        setLoading(true);
  
        try {
          const response = await axios.delete(`https://fast-animes.onrender.com/animes/delete/${id}`, 
          options);

          setResponse(response.data);

          console.log(`${response.data.message}\nStatus: ${response.status}.`)

        } catch (error) {

          setError(error);
          console.log('Um erro ocorreu ao tentar deletar o item: ' + error);
        }
  
        setLoading(false);
      };
 
  
    return { response, error, loading, deleteAnime };
  };