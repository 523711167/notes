import React, { Fragment } from "react";

// 通过最原始props向最下级组件传递信息
/* export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <ToolBar theme={'我代表主题色'}/>
            </Fragment>
        )
    }
}

function ToolBar(props) {
    return (
        <Fragment>
            <ThemedButton theme={props.theme}/>
        </Fragment>
    )
}

function ThemedButton(props) {
    return (
        <Fragment>
            <button>{props.theme}</button>
        </Fragment>
    )
} */

/*
// 第一步 创建ThemeContext
// 第二步 使用ThemeContext.Provider,value赋值
// 第三步 通过static 使用ThemeContext
// context的值离当前组件最接近的Provider,如果没有匹配到Privider,则会去defualtValue
// 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染
// Context.Consumer不是很懂
let ThemeContext = React.createContext('我代表主题色')
export default class App extends React.Component {

    state = {
        err: '我是白色'
    }

    render() {
        return (
            <Fragment>
                <ThemeContext.Provider value={this.state.err}>
                    <ToolBar/>
                    <button onClick={ () => this.setState({ err: '我是黑色'})} >Provider修改值</button>
                </ThemeContext.Provider>
            </Fragment>
        )
    }
}

class ToolBar extends React.Component{
    // ThemeContext.Provider 发生变化，下级组件shouldComponentUpdate不会影响下级组件的render
    shouldComponentUpdate() {
        console.log("B-----shouldComponentUpdate")
        return false 
    }

    render() {
        return (
            <Fragment>
                    <ThemedButton/>
            </Fragment>
        )
    }

}
*/

// class ThemedButton extends React.Component {

//     // 等价于ThemedButton.contextType = ThemeContext
//     static contextType = ThemeContext

//     render() {
//         console.log('@@App')
//         return (
//             <Fragment>
//                 <button>{this.context}</button>
//             </Fragment>
//         )
//     }
// } 
// 等效上面那种写法 class组件和函数组件都可以使用，函数组件没有this所以只能使用Comsumer
// function ThemedButton() {
//     return (
//         <ThemeContext.Consumer>
//             {value => <button>{value}</button>}
//         </ThemeContext.Consumer>
//     )
}

/* // 可以通过props传递react组件
export default function App(props) {

    const chil = (
        <Fragment>
            <button>我代表主题色,传递子组件形式</button>
        </Fragment>
    )

    return (
        <Fragment>
            <ToolBar chil={chil}/>
        </Fragment>
    )
}

function ToolBar(props) {
    return (
        <Fragment>
            {props.chil}
        </Fragment>
    )
} */