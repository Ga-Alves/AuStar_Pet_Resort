import axios from "axios";

const backend = axios.create({
    baseURL: 'http://192.168.26.94:3030',
    withCredentials: true,
});

export default backend;