import React from "react";

import Loading from "./component/Loading";

export default class App extends React.Component {

    state = {
        hasRrror: false
    }

    // 可以捕获子组件发生的错误,在父组件render之前，通过返回值修改state的值。
    // 1.只能捕获后代组件生命周期的错误
    // 1.不可以捕获自身组件的错误
    // 2.子组件的合成事件无法捕获
    // 3.定时器中的异常也无法捕获
    static getDerivedStateFromError(error) {
        console.log('@@@',error)
        return {hasRrror: true}
    }

    // 把错误信息发送到服务器，统计错误
    // 这个函数不是很明白
    componentDidCatch(err, info) {

    }

    render() {
        return (
            <div>
                <h1>我是App组件，我要控制A组件的错误溢出</h1>
                {this.state.hasRrror ? <Loading/>  : <A/>}
                {/* <A /> */}
            </div>
        )
    }
}


class A extends React.Component {

    state = {
        todo: [
            {id: '1', todo: '打豆豆'},
            {id: '2', todo: '打呃呃'},
            {id: '3', todo: '打到底'}
        ],
        // todo: "",
        noTodo: ''
    }

    add = () => {
        this.state.noTodo.map(() => undefined)
    }

    render() {
        return (
            <div>
                {
                    this.state.todo.map((val) => {
                        return <li key={val.id}>{val.id}----{val.todo}</li>
                    })
                }
                {/* 点击事件错误不会捕获，生产环境不影响页面，测试环境影响页面 */}
                <input onClick={this.add} type="button"  value='加一个'/>
            </div>
        )
    }
}