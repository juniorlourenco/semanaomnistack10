import axios from 'axios';

const api = axios.create({
    baseURL: 'https://192.168.1.5:3334',
});

export default api;