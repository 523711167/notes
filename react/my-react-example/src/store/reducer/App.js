import { setToken, setUsername } from '@s/constant'
import { getToken, getUsername} from '@/utils/cookies'

const init = {
    token: getToken() || '',
    username: getUsername() || ''
}
export default function AppReducer(preState=init, { type, data={} }) {
    let { token, username } = data
    switch (type) {
        case setToken:
            return {
                ...preState,
                token
            }
        case setUsername:
            return {
                ...preState,
                username
            }
        default:
            return preState;
    }
}