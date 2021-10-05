import {increament, decreament} from './constant'

export const createIncreamentAction = (data) => {
    return {type: increament, data}
}

export const createDecreamentAction = (data) => {
    return {type: decreament, data}
}

// 异步action
export const createIncreamentAsyncAction = (data) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncreamentAction(data))
        }, 1000)
    }
}