import React from "react";

// PureComponent 实现了shouldComponentUpdate生命周期函数，浅层对比 prop 和 state 的方式来实现了该函数,
// 此外，React.PureComponent 中的 shouldComponentUpdate() 将跳过所有子组件树的 prop 更新。比如A组件
// 因此，请确保所有子组件也都是“纯”的组件
export default class App extends React.PureComponent {

    state = {
        data: {
            x: 1,
            y: 2
        }
    }

    add = () => {
        this.state.data.x = this.state.data.x + 1
        this.setState({
            data: this.state.data
        })
    }

    render() {
        return (
            <div>
                <span>{this.state.data.x}</span>
                <button onClick={this.add}>+1</button>
                <A x={this.state.data.x}/>
            </div>
        )
    }
}

function A(props) {
    return (
        <span>
            {props.x}
        </span>
    )
}