import React, { Fragment, forwardRef, useMemo, useRef, useState, useImperativeHandle, useDebugValue } from "react";

function useMyCount(num) {

    const [ count, setCount ] = useState(0)


    // 调试值的，差不多是可以替代console的那种
    useDebugValue(count > num ? '溢出': '不足', status => {
        return status === '溢出' ? '我是你爹': 0
    })

    const myCount = () => {
        setCount(count + 2)
    }

    return [ count, myCount ]
}


function App() {

    const [ count, setCount ] = useMyCount(10)

    return (
        <Fragment>
            { count }
            <button onClick={ () => setCount() }>setCount</button>           
        </Fragment>
    )
}

export default App