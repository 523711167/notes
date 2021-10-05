import React from "react";
import ReactDOM  from "react-dom";

import App from "./App"
import store from './redux/store'



ReactDOM.render(<App/>,document.getElementById('root'))

// 第五步 执行render函数 进行diff运算
store.subscribe(() => {
    ReactDOM.render(<App />, document.getElementById("root"))
})