import axios from 'axios';

export const api = axios.create({
    baseURL: "https://sistema-delivery.onrender.com/"
});
api.interceptors.response.use(
    response => response,
    error => {
        console.error('Interceptor error:', error.response); // Adicione um log detalhado aqui

        if (error.response && error.response.status === 401) {
            localStorage.clear();
            window.location.href = '/loginClient';
        }

        return Promise.reject(error);
    }
);



export const apiMan = axios.create({
    baseURL: "https://sistema-delivery.onrender.com/"
});

apiMan.interceptors.response.use(
    response => response,
    error => {
        console.error('Interceptor error:', error.response); // Adicione um log detalhado aqui

        if (error.response && error.response.status === 401) {
            localStorage.clear();
            window.location.href = '/login/entregador';
        }

        return Promise.reject(error);
    }
);
