import axios from "axios"

const api = axios.create({
    baseURL: 'https://localhost3002/'
 })

 export default api