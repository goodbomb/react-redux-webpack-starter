import axios from 'axios';

const axiosConfig = () => {
    axios.defaults.baseURL = process.env.API_URL;
    axios.defaults.withCredentials = true;
};

export default axiosConfig;
