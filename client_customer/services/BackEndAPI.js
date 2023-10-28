import axios from "axios";

const backend = axios.create({
    baseURL: 'http://200.131.184.176:3030/',
    withCredentials: true,
});

export default backend