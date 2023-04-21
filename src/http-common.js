import axios from 'axios';

export default axios.create({
  baseURL: 'http://159.223.131.191:3000/',
  withCredentials: true,
  headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
});
