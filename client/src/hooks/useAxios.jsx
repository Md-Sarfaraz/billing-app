import { useState, useEffect } from "react";
import axios from "axios";

//axios.defaults.baseURL = 'http://localhost:8080/api'
axios.defaults.baseURL = 'https://probable-train-p747rj5qg5wcr4vw-8080.app.github.dev'

//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'


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
        console.log('params', params)
        try {
            const result = await axios.request(params);
            //console.log('result', result)
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