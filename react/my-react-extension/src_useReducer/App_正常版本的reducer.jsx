import React, { Fragment, useReducer } from "react";

function App(props) {

    const initState = { count: 0 }

    function reducer(state, action) {
        let { type } = action
        switch (type) {
            case 'add':
                return { count: state.count + 1 }
            case 'sub':
                return { count: state.count - 1 }
            default:
                return state
        }
    }
    // 第一步 创建useReducer函数
    // 第二步 初始化const initState值
    // 第三步 创建reducer函数 类似redux的reducer
    // 第四步 调用dispatch函数，传递action

    const [ state, dispatch ] = useReducer(reducer, initState)
    
    return (
        <Fragment>
            { state.count }
            <button onClick={ () => dispatch({ type: 'add' })}>add</button>
            <button onClick={ () => dispatch({ type: 'sub' })}>sub</button>
        </Fragment>
    )
}

export default App