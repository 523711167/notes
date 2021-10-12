import React, {Fragment} from "react";

// 第一步 声明Mycontext组件
const Mycontext = React.createContext()
const {Provider, Consumer} =  Mycontext
export default class App extends React.Component {
    render() {
        return (
            // Fragment实际不会渲染标签,或者可以使用<></>空标签
            <div>
                <h1>我是App组件</h1>
                {/* 第二步 使用Provider组件包括需要value的子组件*/}
                <Provider value={{name: '漂亮了'}}>
                    <A />
                </Provider>
            </div>
        )
    }
}


class A extends React.Component {
    render() {
        return (
            <div>
                <h1>我是子组件A</h1>
                <h2>我可以接受来自App的Props</h2>
                <B />
            </div>
        )
    }
}

/* 
// 类组件
class B extends React.Component {

    // 第三步 后代组件声明需要使用Mycontext
    static contextType = Mycontext

    render() {
        // 第四步从 this.context中获取Provider组件的value值
        console.log(this.context)
        return (
            <div>
                <h1>我是后代类组件B</h1>
                <h2>我可以不通过A组件，直接接收App组件的值<em>{this.context.name}</em></h2>

            </div>
        )
    }
}
 */
// 函数组件
function B() {
    return (
        <div>
            <h1>我是后代函数组件B</h1>
            <Consumer>
                {
                    value => {
                        return (
                            <h1>
                                我可以不通过A组件，直接接收App组件的值<em>{value.name}</em>
                            </h1>
                        )
                    }
                }
            </Consumer>
        </div>
    )
}
