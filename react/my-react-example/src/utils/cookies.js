import cookie from 'react-cookies'
const token = 'adminToken'
const username = 'username'

export function setToken(value) {
    cookie.save(token, value)
}

export function getToken() {
    return cookie.load(token)
}


export function setUsername(value)  {
    cookie.save(username, value)
}

export function getUsername()  {
    return cookie.load(username)
}