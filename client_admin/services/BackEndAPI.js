import axios from "axios";

const backend = axios.create({
    baseURL: 'http://192.168.18.16:3030',
    withCredentials: true,
});

export default backend;