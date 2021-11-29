import axios from "axios";
import authHeader from "./auth-header";

const API_URL = 'http://localhost:8080/api/home/';

// class that is used to get data from api
class ApiData{
    getContent(){
        return axios.get(API_URL + 'all', {headers: authHeader()})
    }
}

export default new ApiData();