import React from "react";

export default class App extends React.Component {

    state = {
        numb: 0
    }
    
    increatment = (event) => {
        let val = this.selectNode.value;
        let sum = this.state.numb
        this.setState({numb: sum + val*1})
    }

    decreatment = (event) => {
        let val = this.selectNode.value;
        let sum = this.state.numb
        this.setState({numb: sum - val*1})
    }

    increatmentIfOdd = (event) => {
        let val = this.selectNode.value;
        let sum = this.state.numb
        if (sum % 2 === 0) return 
        this.setState({numb: sum + val*1})
    }

    increatmentAsync = (event) => {
        setTimeout(() => {
            let val = this.selectNode.value;
            let sum = this.state.numb
            this.setState({numb: sum + val*1})
        }, 1000);
    }

    render() {
        let {numb} = this.state
        return (
            <div>
                <h1>计算结果 {numb}</h1>
                <select ref={node => this.selectNode = node}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increatment}>+</button>
                <button onClick={this.decreatment}>-</button>
                <button onClick={this.increatmentIfOdd}>奇数相加</button>
                <button onClick={this.increatmentAsync}>异步相加</button>
            </div>
        )
    }
}