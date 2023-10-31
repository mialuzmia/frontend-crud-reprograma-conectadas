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

            }catch (error){
                setError(error);
            }

            setLoading(false);
        };
    
        fetchData();
    }, [url, options]);

    return { data, error, loading };
}