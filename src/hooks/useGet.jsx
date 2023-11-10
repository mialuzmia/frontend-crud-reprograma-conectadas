import axios from "axios";
import { useEffect, useState } from "react";


export const useGet = (url, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await axios.get(url, options);

                setData(response.data);
                
                console.log(`Requisição feita com sucesso.\nStatus: ${response.status}`);

            }catch (error){
                setError(error);
                console.log('Um erro ocorreu ao tentar efetuar um GET na api: ' + error);
            }

            setLoading(false);
        };
    console.log(loading);
        fetchData();
    }, [url, options]);

    return { data, error, loading };
}