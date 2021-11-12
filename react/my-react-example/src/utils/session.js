export function getToken() {
    return sessionStorage.getItem('adminToken')
}

export function setToken(value) {
    sessionStorage.setItem('adminToken', value)
}