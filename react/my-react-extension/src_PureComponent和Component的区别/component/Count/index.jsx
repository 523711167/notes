import React from "react";
import ReactDOM from "react-dom";

function Count() {

    let [count, setCount] = React.useState(0)
    let [count2, setCount2] = React.useState(0)

    // 首次挂载组件初始化一次，[]数组控制监听更新的useState，可以单独监听某个useState
    React.useEffect(() => {
        // 疑问 todo 这种方式下产生了不正确的结果
        // 不知道为什么一直是输出0
        console.log('我要开启副作用');
        let timer = setInterval(() => {
            console.log(timer, count2);
            count = count + 1;
            console.log(timer, count);
            setCount(); 
        }, 1000)
        return () => {
            console.log('我准备消除副作用');
            clearInterval(timer)
        }
/*  
        // 函数式的setState可以获得正确的返回结果
        // 如何赋值给timer，下次定时任务会覆盖之前的值，导致不会重复启动定时任务
        let timer = setInterval(() => {
            setCount(count => count + 1); 
        }, 1000)
        return () => {
            // 组件卸载的时候调用
            clearInterval(timer)
        }
         */
    },[ count2 ])

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

    return (
        <div>
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <input type="button" value="累加" onClick={add} />
            <input type="button" value="累加2" onClick={add2} />
            <input type="button" value="卸载组件" onClick={unmount} />
        </div>
    )
}

export default Count