import React from "react";

export default class App extends React.Component {
    render() {
        return (
            <div>
                {/* 可以向A组件传入标签体内容 */}
                {/* 通过render可以向B组件传递信息， 可以配合...展开 */}
                <A render={(msg) => <B msg={msg}/>} />
            </div>
        )
    }
}


class A extends React.Component {

    state = {
        msg: '我是A组件，我要告诉B组件，你是沙雕'
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>我是组件A</h1>
                {this.props.render(this.state.msg)}
            </div>
        )
    }
}

class B extends React.Component {
    render() {
        return (
            <div>
                <div>我是组件B</div>
                <div>{this.props.msg}</div>
            </div>
        )
    }
}