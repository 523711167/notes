import React, { Fragment } from "react";

import User from "./component/User";

class App extends React.Component {


    constructor(props) {
        super(props);
        this.classRef = React.createRef();
        this.htmlRef = React.createRef();
    }

    componentDidMount() {
        // ref可以在class组件和html元素上使用，但是不可以在函数组件上使用
        // ref属性在componentDidMount和ComponentDidUpdate的生命周期前更新
        // 在卸载的时候为null
        // 函数组件如果想函数组件中使用 ref，你可以使用 forwardRef（可与 useImperativeHandle 结合使用）
        console.log('this.htmlRef', this.htmlRef)
        console.log('this.classRef', this.classRef)
    }
    render() {
        return (
            <div>
                <button ref={this.htmlRef}>sfs</button>
                <User ref={this.classRef}/>
            </div>
        );
    }
}

// 如果父组件想控制子组件的DOM节点
// 1.通过ref的转发现实
// 2.通过props传递React.createRef()，子组件通过ref={props.parentRRef}
// 3.通过props传递 dom => this.xxxRef = dom函数，自组件通过ref={props.parentRef}
// 函数形式在ref在组件挂载的时候会执行2次，第一次传入null值，第二次传入Dom属性，同时props中是没有ref的属性的w
export default App