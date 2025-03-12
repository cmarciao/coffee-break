import axios from "axios";

const baseURL = 'http://192.168.100.68:5000';
const api = axios.create({
    baseURL
});

export { api };