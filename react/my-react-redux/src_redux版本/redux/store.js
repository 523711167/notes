// 第二步创建包含Reducer的store对象

import {createStore} from 'redux'
import countReducer from './count_reducer'

export default createStore(countReducer)

