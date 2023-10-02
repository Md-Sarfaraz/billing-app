import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/api'
//{ url, method, body = null, headers = null }
export const useAxios = (axiosParams) => {

    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);


    const header = {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }


    const fetchData = async (params) => {
        try {
            const result = await axios.request({ ...params, headers: header });
            setResponse(result.data);
        } catch (error) {
            setError(error);
        } finally {
            setloading(false);
        }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, []); // execute once only

    return [response, error, loading];
};