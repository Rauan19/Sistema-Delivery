import axios from 'axios';

export const api = axios.create({
    baseURL: "https://dfood.onrender.com/"
});
api.interceptors.response.use(
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







export const apiMan = axios.create({
    baseURL: "http://localhost:4000/"
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
