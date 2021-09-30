import axios from 'axios';

const axiosConfig = () => {
    axios.defaults.baseURL = process.env.API_URL || 'http://localhost:5555/';
    axios.defaults.withCredentials = true;
};

export default axiosConfig;
