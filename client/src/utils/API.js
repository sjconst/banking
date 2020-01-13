import axios from "axios";

export default {
    getUser: username => {
        return axios.get(`/api/user/${username}`)
    },
    saveUser: data => {
        return axios.post("/api/user", data)
    },
    checkUser: (username, password) => {
        return axios.post(`/api/user/${username}/check`, password)
    },
    deposit: (type, username, data) => {
        return axios.put(`/api/user/${username}/deposit/${type}`, {
            amount: data
        })
    }
}