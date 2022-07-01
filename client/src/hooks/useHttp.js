import axios from "axios";

const useHttp = () => {

    const getRequest = async(url) => {
        const baseUrl = `http://localhost:5000/api/device`
        try {
            const response = await axios.get(`${baseUrl}${url}`);
            return await response.data;
        } catch(e) {
            throw new Error(e)
        }
    }

    const postRequest = async(body) => {
        const baseUrl = `http://localhost:5000/api/cart`
        try {
            const response = await axios.post(baseUrl, body)
        } catch(e) {
            throw new Error(e)
        }
    }

    return { getRequest, postRequest }
}
export default useHttp;