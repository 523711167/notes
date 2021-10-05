// 通过react-redux创建容器组件
import {connect} from 'react-redux'
import React from "react";

import {createIncreamentAction, createDecreamentAction, createIncreamentAsyncAction} from '../../redux/action/count'


class Count extends React.Component {

    // 使用react-redux版本
    // 第一步 Count需要移除所有关于redux代码，Count组件通过其容器组件传递state、回调函数
    // 渲染UI和执行页面交互
    // 第二步 安装react-redux，创建Count的Container组件，由Container和redux进行通信
    // 第三步 App组件引入Count容器组件，并且通过prop传入store对象
    // 第四步 CountUI组件可以通过props，解析出redux的state和容器组件的回调函数和redux的store对象
    // 在引入react-redux版本优化
    // 第一 container容器connect对象优化
    // 第二 store不需要在index.js文件中通过store的subscribe方法监听redux中state变化，
    // render整个app组件，每个容器组件会自动监听
    // 第三 通过Provider组件会为每个容器组件传递store={store}
    // 第四 可以合并CountUI和Count容器组件




    increatment = (event) => {
        let {increament} = this.props
        let val = this.selectNode.value;
        increament(val)
    }

    decreatment = (event) => {
        let {decreament} = this.props
        let val = this.selectNode.value;
        decreament(val)
    }

    increatmentIfOdd = (event) => {
        let {count, increament} = this.props
        let val = this.selectNode.value;
        if (count % 2 === 0) return 
        increament(val)
    }

    increatmentAsync = (event) => {
        let {increamentAsync} = this.props
        let val = this.selectNode.value;
        increamentAsync(val)
    }

    render() {
        return (
            <div>
                <h1>我是Count组件 添加了{this.props.person.length}人</h1>   
                <h2>计算结果 {this.props.count}</h2>
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

// 第一个参数 为两个函数
//      1.mapStateToProps(应该不是这个参数为容器组件的state， 而是store.getState的属性)，
//      函数的返回值是一个对象，当作prop传给子组件
//      2.mapDispatchToProps(redux的dispatch函数)
//      函数的返回值是一个对象，为key=value的回调函数
// 第二个参数 传入Count容器组件的UI组件
// 第三个参数 通过页面标签传入store对象
function mapStateToProps(state) {
    return state
}

/* function mapDispatchToProps(dispatch) {
    return {
        increament: (number) => dispatch(createIncreamentAction(number)),
        decreament: (number) => dispatch(createDecreamentAction(number)),
        increamentAsync: (number) => dispatch(createIncreamentAsyncAction(number))
    }
} */


// 优化后 connnect可以直接返回对象，dispatch会在执行完成后自动执行
export default connect(mapStateToProps, {
    increament: createIncreamentAction,
    decreament: createDecreamentAction,
    increamentAsync: createIncreamentAsyncAction
})(Count)