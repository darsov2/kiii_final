import axios from "../axios";
// import { config } from '../../Constants'

const authenticate = (username, password) => {
    return axios.post('http://trip2mk.ddns.net:8083/auth/authenticate', { username, password }, {
        headers: { 'Content-type': 'application/json'}
    })
}

const signup = (user) => {
    return axios.post('http://trip2mk.ddns.net:8083/auth/signup', user, {
        headers: { 'Content-type': 'application/json' }
    })
}

const edit = (user) => {
    return axios.post('http://trip2mk.ddns.net:8083/auth/user/edit', user, {
        headers: { 'Content-type': 'application/json' }
    })
}

export const authAPI = {
    authenticate,
    signup,
    edit
}


function basicAuth(user) {
    return `Basic ${user.authdata}`
}