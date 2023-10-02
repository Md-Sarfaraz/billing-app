import { useAxios } from "../hooks/useAxios";


const ProductApi = () => {

    const [response, loading, error] = useAxios({
        method: 'post',
        url: '/product/list',
    });




    return {

    };
}