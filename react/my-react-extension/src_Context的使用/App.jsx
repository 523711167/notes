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
    render() {
        return (
            <Fragment>
                <ThemeContext.Provider value={'我代表主题色'}>
                    <ToolBar/>
                </ThemeContext.Provider>
            </Fragment>
        )
    }
}

function ToolBar(props) {
    return (
        <Fragment>
            <ThemeContext.Provider value={'我代表主题色红色'}>
                <ThemedButton/>
            </ThemeContext.Provider>
        </Fragment>
    )
}

class ThemedButton extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <Fragment>
                <button>{this.context}</button>
            </Fragment>
        )
    }
} 
*/

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