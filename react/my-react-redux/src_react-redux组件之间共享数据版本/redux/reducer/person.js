import { addPerson } from "../constant";


// 疑问 todo state的对象到底是存储在哪里
// 这个地方redux的state属性应该不是在reducer里面，而是通过执行presonReducer函数返回到store？？？
// 从store.getState这个方法中，可以得出执行reducer之后，返回到了store中的state属性中
const initstate = [{id: '1', username: '拼夕夕', age: 18}]
export default function personReducer(preState=initstate, action) {
    //疑问 todo 在组件的通信中例子中，我发现这个personReducer执行了3次为什么
    // console.log('personReducer初始化');
    let {type, data} = action
    switch (type) {
        case addPerson:
            return [data ,...preState]
        default:
            return preState
    }
}