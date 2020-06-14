import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.68.108:3333',
});

export default api;
// baseURL: 'http://10.0.2.2:3333',
