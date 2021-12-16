import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import SearchReducer from '@s/reducer/Search'
import TableRuducer  from '@s/reducer/Table'
import AppReducer  from '@s/reducer/App'
import AsideMenuReducer  from '@s/reducer/AsideMenu'

export default createStore(
    combineReducers({
        search: SearchReducer,
        table: TableRuducer,
        app: AppReducer,
        AsideMenu: AsideMenuReducer
    }), 
    composeWithDevTools(applyMiddleware(thunk)))