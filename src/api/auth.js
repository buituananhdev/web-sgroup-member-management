import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000', 
    timeout: 10000, 
});

class Auth {
    constructor() {
        this.axiosInstance = axiosInstance;
    }

    Login = (data) => {
        return axiosInstance.post('/auth/login', {
            username: data.username,
            password: data.password
        })
    }
}

export const auth = new Auth();