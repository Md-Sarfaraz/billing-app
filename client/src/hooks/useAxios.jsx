import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080'

//{ url, method, body = null, headers = null }
export const useAxios = ({ url, method, body = null, headers = null }) => {

    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    // const header = {
    //     'content-type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    // }


    const fetchData = async () => {

        await axios[method](url, JSON.parse(headers), JSON.parse(body))
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(!loading);
            });
    };

    useEffect(() => {
        fetchData();
    }, []); // execute once only

    return [response, error, loading];
};