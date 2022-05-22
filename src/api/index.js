import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/users/',
});


export default {
    fetchUserInfo(userName) {
        return instance.get(`${userName}`)
    },
    fetchUserRepositories(userName) {
        return instance.get(`${userName}/repos`)
    }
}