import React from "react";
import ReactDOM from "react-dom";

function Count() {

    let [count, setCount] = React.useState(0)
    let [count2, setCount2] = React.useState(0)

    let a = React.createRef()

    React.useEffect(() => {

        // 函数式的setState可以获得正确的返回结果
        // 如何赋值给timer，下次定时任务会覆盖之前的值，导致不会重复启动定时任务
        let timer = setInterval(() => {
            setCount(count => count + 1); 
        }, 1000)
        return () => {
            // 组件卸载的时候调用
            clearInterval(timer)
        }
        
    },[])

    // 奇怪
    function add() {
        setCount(count + 1)
    }

    function add2() {
        setCount2(count2 + 1)
    }

    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    function show() {
        alert(a.current.value)
    }

    return (
        <div>
            <h1>{count}</h1>
            <h1 >{count2}</h1>
            <input ref={a} type="text" />
            <input type="button" value="累加" onClick={add} />
            <input type="button" value="累加2" onClick={add2} />
            <input type="button" value="卸载组件" onClick={unmount} />
            <input type="button" value="点击弹框" onClick={show} />
        </div>
    )
}

export default Count