import React from "react";
import { withRouter } from "react-router-dom";

class Header extends React.Component {

    push = (event) => {
        let {history} = this.props
        history.goForward()
    }

    back = (event) => {
        let {history} = this.props
        history.goBack()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>欢迎来到路由基本使用</h1>

                <button onClick={this.push}>前进</button>
                <button onClick={this.back}>后退</button>
            </div>
        )
    }
}
// 通过withrouter函数加工之后，可以让一般组件拥有路由组件属性
export default withRouter(Header)