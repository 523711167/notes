// 第二步创建包含Reducer的store对象
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import countReducer from './reducer/count'
import personReducer from '../redux/reducer/person'

// createStore 
// 第一个参数就是传入了一个store的state状态属性，通过reducer初始化返回value，
// 编码人员定义对应的key, 在容器组件中mapStateToProps函数，可以获取store的state，把state作为
// props传入UI组件
export default createStore(combineReducers({
    count: countReducer,
    person: personReducer
}), composeWithDevTools(applyMiddleware(thunk)))

