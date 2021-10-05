import React from "react";

import store from '../../redux/store'

export default class Count extends React.Component {

    increatment = (event) => {
        let val = this.selectNode.value;
        // 第四步 通过store的dispatch方法，执行reducer
        // 疑问 如何通过action可以找到对应的reducer
        store.dispatch({type: 'increament', data: val})
    }

    decreatment = (event) => {
        let val = this.selectNode.value;
        store.dispatch({type: 'decreament', data: val})

    }

    increatmentIfOdd = (event) => {
        let val = this.selectNode.value;
        let sum = store.getState()
        if (sum % 2 === 0) return
        store.dispatch({type: 'increament', data: val})
    }

    increatmentAsync = (event) => {
        setTimeout(() => {
            let val = this.selectNode.value;
            store.dispatch({type: 'increament', data: val})
        }, 1000);
    }

    render() {
        return (
            <div>
                {/* 第三步 引入store对象，调用getState()方法 */}
                <h1>计算结果 {store.getState()}</h1>
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