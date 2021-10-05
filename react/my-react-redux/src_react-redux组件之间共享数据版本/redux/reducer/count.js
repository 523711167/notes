import {increament, decreament} from '../constant'
// 第一步 创建Reducer
// 创建一个处理state值的func
// 第一个参数为当前状态的state
// 第二个参数为一个action对象
const iniState = 0
export default function countReducer(preState=iniState, action) {
    // console.log('countReducer初始化');
    const {type, data} = action;
    switch (type) {
        case increament:
            return preState + data*1
        case decreament:
            return preState - data*1
        default:
            return preState
    }
}