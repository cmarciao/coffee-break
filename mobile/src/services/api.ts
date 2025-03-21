import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_API_URL;
const api = axios.create({ baseURL });

export { api };