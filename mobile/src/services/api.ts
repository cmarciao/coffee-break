import axios from "axios";

const baseURL = 'http://192.168.100.68:5000';
const api = axios.create({
    baseURL
});

const baseExpressUrl = 'http://192.168.100.68:3000';
const expressApi = axios.create({
    baseURL: baseExpressUrl
});

export { api, expressApi };