import axios from 'axios';
import Cookies from 'js-cookie'

const axiosInstance = axios.create({
    baseURL: 'https://umino.me/api/v1',
    // baseURL: 'http://64.226.117.75:8080/api/v1',
    // baseURL: 'http://localhost:8080/api/v1',
    // baseURL: 'http://localhost:8000/api/v1',
    // baseURL: 'http://178.128.206.171/api/v1',
    // baseURL: 'https://www.umino.me/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use((config) => {
    const token = Cookies.get('access_token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;