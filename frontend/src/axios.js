import axios from "axios";
import jsonpAdapter from 'axios-jsonp';
const instance = axios.create({
    baseURL: "http://backend-service:8080/",
    headers: { 
        // "Access-Control-Allow-Origin": "*"
    }
})

export default instance;
