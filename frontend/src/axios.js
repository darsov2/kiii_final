import axios from "axios";
import jsonpAdapter from 'axios-jsonp';
const instance = axios.create({
    baseURL: "http://backend.com/",
    headers: { 
        // "Access-Control-Allow-Origin": "*"
    }
})

export default instance;
