import axios from "axios"

const useHttp = () => {
    const getData = async (url: string) => {
        const { data } = await axios(`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`)
        return data;
    }

    return { getData }
}
export default useHttp;