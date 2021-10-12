import React from "react";

export default class App extends React.Component {
    render() {
        return (
            <div>
                {/* 通过children属性传入标签结构， 不借助redux，A组件很难和B组件通信 */}
                <A>
                    <B />
                </A>
            </div>
        )
    }
}


class A extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>我是组件A</h1>
                {this.props.children}
            </div>
        )
    }
}

class B extends React.Component {
    render() {
        
        return (
            <div>
                <div>我是组件B</div>
            </div>
        )
    }
}