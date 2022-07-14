import axios from "axios"

const api = axios.create({
    baseURL: ' https://technoobs.herokuapp.com/'
 })

 export default api