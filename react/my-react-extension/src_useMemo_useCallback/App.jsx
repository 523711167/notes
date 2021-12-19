import React, { Fragment, useCallback, useMemo, useState } from "react";

function App() {

    let [count, setCount] = useState(0)
    let add = () => setCount( count + 1 )
    // useCallback包裹的函数，在重新渲染之后，返回的依然是上一次函数的引用，除非数组的值发生变化，类似Effect
    const change = useCallback(() => {}, [])
    // 如果是字符串字变量，我们发现每一次渲染‘123’都是一样的
    // const str = '123'
    // 如果是复杂变量，每一次渲染的都不一样
    // useMemo包裹之后返回的都是上一次的引用
    // 传入 useMemo 的函数会在渲染期间执行
    const str = useMemo( () => {
        console.log('memo')
        return {}
    }, [])

    return (
        <Fragment>
            Count:{count}
            <button onClick={add}>add</button>
            <ChilCMeno str={str} count={change}/>
        </Fragment>

    )
}

export default App


// memo 父组件重新渲染，props不修改的情况下，子组件不会更新
let ChilCMeno = React.memo(ChilC)
function ChilC(props) {
    console.log('@@@@')
    return (
        <Fragment>

        </Fragment>
    )
}
