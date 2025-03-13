import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-mr-nokib-nojom-uddins-projects.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;