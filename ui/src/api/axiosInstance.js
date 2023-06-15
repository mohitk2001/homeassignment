import axios from 'axios';
// This is the instance of backend api which is created using Node js/Expres JS
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8001/', 
    headers: {
      'Content-Type': 'application/json'
    }
  });