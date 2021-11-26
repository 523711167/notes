import { setUsername, setToken } from '@s/constant'


export const setTokenAction = (token) => {
     return {
         type: setToken,
         data: {
            token
         }
     }
}

export const setUsernameAction = (username) => {
    return {
         type: setUsername,
         data: {
             username
         }
     }
}