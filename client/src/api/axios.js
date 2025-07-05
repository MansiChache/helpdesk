import axios from 'axios';

const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? '/' 
  : 'http://localhost:5000';

const instance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export default instance;