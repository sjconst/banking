import axios from "axios";

export default {
    getUser: id => {
        return axios.get(`/api/user/${id}`)
    }
}