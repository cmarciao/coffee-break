import axios from "axios";

const baseURL = 'http://<SEU_IP>:5000';
const api = axios.create({ baseURL });

export { api };