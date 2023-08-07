import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '5be3ff908be24ca1b69fa01597379497'
    }
})