import { search } from '@s/constant.js'

const init = {
    total: 0,
    data: []
}
export default function SearchReducer(preState=init, { type, data }) {
    switch (type) {
        case search:
            return {
                ...preState,
                data: data.data,
                total: data.total || 0
            }
        default:
            return preState
    }
}