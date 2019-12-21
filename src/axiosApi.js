import axios from 'axios'
const axiosApi = axios.create({
    baseURL: 'https://post-7681c.firebaseio.com/'
});
export default axiosApi