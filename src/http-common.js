import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: true,
  headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
});
