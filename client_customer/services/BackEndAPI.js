import axios from "axios";

const backend = axios.create({
    baseURL: 'http://192.168.0.36:3030',
    withCredentials: true,
});

export default backend;