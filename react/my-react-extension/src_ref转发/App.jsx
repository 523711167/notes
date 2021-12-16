import React, { Fragment } from "react";

import User from "./component/User";

class App extends React.Component {


    constructor(props) {
        super(props);
        // 这个其实是要获取User组件中的dom元素
        this.classRef = React.createRef();
        this.htmlRef = React.createRef();
    }

    componentDidMount() {
        console.log('this.htmlRef', this.htmlRef)
        console.log('this.classRef', this.classRef)
    }
    render() {
        // class组件和函数组件都可以使用转发ref
        // 第一步 React.createRef()创建Ref
        // 第二步 组件上添加ref属性 <User ref={this.classRef}/>
        // 第三步 通过React.forwardRef( (props, ref) => ( <div ref=ref> )) 把ref传递给子组件的DOM元素
        return (
            <div>
                <button ref={this.htmlRef}>sfs</button>
                <User ref={this.classRef}/>
            </div>
        );
    }
}

export default App