// 第二步创建包含Reducer的store对象

import {createStore, applyMiddleware} from 'redux'
import countReducer from './count_reducer'
import thunk from 'redux-thunk'

// 异步action 添加异步action的配置
export default createStore(countReducer, applyMiddleware(thunk))

