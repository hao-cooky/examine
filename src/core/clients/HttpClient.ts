import axios, {type  AxiosInstance, AxiosError} from 'axios';

interface ApiError {
    message: string;
}

const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://microsoftedge.github.io',
    timeout: 30000,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a response interceptor to handle global errors
apiClient.interceptors.response.use(
    (response) => response.data,

    (error: AxiosError<ApiError>) => {
        // if (error.response && error.response.status === 401) {
        //     window.location.href = '/login';
        // }

        return Promise.reject(error);
    }
);

export default apiClient;