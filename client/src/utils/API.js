import axios from "axios";

export default {
    getUser: id => {
        return axios.get(`/api/user/id/${id}`)
    },
    saveUser: data => {
        return axios.post("api/saveUser", data)
    },
    checkUser: (email, username) => {
        return axios.get(`/api/user/check/${email}/${username}`)
    }
}