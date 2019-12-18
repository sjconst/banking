import axios from "axios";

export default {
    getUser: username => {
        return axios.get(`/api/user/username/${username}`)
    },
    saveUser: data => {
        return axios.post("/api/saveUser", data)
    },
    checkUser: (username, password) => {
        return axios.get(`/api/user/check/${username}/${password}`)
    },
    deposit: (type, username, data) => {
        return axios.put(`/api/deposit/${type}/${username}`, {
            amount: data
        })
    }
}