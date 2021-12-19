import React, { Fragment, useContext } from "react";

const Color = React.createContext('我是白色')

function App() {
    return (
        <Fragment>
            <Color.Provider value="我是黑色">
                <Show />
            </Color.Provider>
        </Fragment>    
    )
}

// 第一步 React.createContext()
// 第二步 定义<Color.Provider value="我是黑色">
// 第三部 使用useContext(Color)
function Show(props) {

    const color = useContext(Color)

    return (
        <Fragment>
            <div>
                {color}
            </div>
        </Fragment>
    )
}


export default App





