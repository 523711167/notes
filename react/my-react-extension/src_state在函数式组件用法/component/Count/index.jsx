import React from "react";
import { render } from "react-dom";

function Count() {
    // 数组的结构赋值
    // 第一个为初始值，第二个为一个函数，
    // 疑问 todo 函数包含很多东西视频没说,函数有三个形参
    const [count, setCount] = React.useState({count: 1})
    const [name, setName] = React.useState('拼刀刀')


    function add() {
        // 第一种写法
        console.log(count)
        setCount({count: (count.count) + 1})
        // 第二种写法
        // setCount((count1) => {
        //    return {count: count1.count + 1}
        // })

        setName((name) => {
            console.log(name)
            return '拼夕夕'
        })
    }
  
    return (
        <div>
            <h1>{count.count}</h1>
            <h1>{name}</h1>
            <input type="button" value="累加" onClick={add} />
        </div>
    )
}

export default Count