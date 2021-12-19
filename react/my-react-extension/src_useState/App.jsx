import React, { useState } from "react";



function App() {

    const [count, setCount] = useState(0)

    return (
        <>
            计算结果{count}
            <ul>
                <li><button onClick={() => setCount(0)}>重置</button></li>
                {/* 函数式setCount 传递旧的state，返回新的state */}
                <li><button onClick={() => setCount((pre) => pre + 1)}>加一</button></li>
                <li><button onClick={() => setCount((pre) => pre - 1)}>减一</button></li>
            </ul>
        </>
    );
}

export default App


