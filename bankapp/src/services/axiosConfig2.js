import axios from 'axios';
import AuthService from './auth.service';

const apii = axios.create({
  baseURL: 'http://localhost:8080/api/rest/bank',
});

apii.interceptors.request.use(
  (config) => {
    const user = AuthService.getCurrentUser();

    if (user && user.jwtToken) {
      config.headers.Authorization = `Bearer ${user.jwtToken}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default apii;
