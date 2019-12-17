import axios from "axios";

export default {
    getUser: id => {
        return axios.get(`/api/user/id/${id}`)
    },
    saveUser: data => {
        return axios.post("api/saveUser", data)
    },
    checkUser: (username, password) => {
        return axios.get(`/api/user/check/${username}/${password}`)
    }
}