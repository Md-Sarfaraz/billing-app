import axios from "axios";
import LocalStorage, { TOKEN_STORAGE_KEY } from "../utility/storage";

export const BASE_URL = 'http://192.168.100.7:8090/api'

const useAxios = () => {

    const instance = axios.create({
        baseURL: BASE_URL,
        headers: {
            'content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        },
        timeout: 5000,
    })

    return instance
}

export { useAxios }