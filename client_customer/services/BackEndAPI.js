import axios from "axios";

const backend = axios.create({
    baseURL: 'http://localhost:3030/',
    withCredentials: true,
});

export default backend