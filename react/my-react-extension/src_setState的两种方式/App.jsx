import React from "react";

export default class App extends React.Component {

    state = {
        count: 0
    }
/* 
    sum = (event) => {
        let {count} = this.state
        // this.setState是异步方法,第二个参数为DOM更新之后的回调方法
        this.setState({count: count+1}, () => {
            console.log("DOM更新之后" ,this.state.count)
        })
        console.log("正常输出", this.state.count)
    }
 */

    // 函数式state更新写法, 第二个参数为DOM更新之后的回调方法
    sum = () => {
        //更新之前的state和props
        this.setState((state, props) => {
            let {count} = state
            return {count: count+1}
        }, () => {})
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1> 
                <input onClick={this.sum} ref={(node) => this.rcc = node} type="button" value="合计" />
            </div>
        )
    }
}