import React, { Component, Fragment, useEffect, useState } from "react";



 class App extends React.Component {

    render() {

        const Qdfdsfsd = withXy({
            component: Xybutton,
        })
        return (
            <>
                <Qdfdsfsd />
            </>
        );
    }
}

export default App



function Xybutton(props) {

    return (
        <Fragment>
            <div>X轴的坐标为{props.x}</div>
            <div>Y轴的坐标为{props.y}</div>
        </Fragment>
    )
}

function Xydiv(props) {

    return (
        <Fragment>
            <div>X轴的坐标为{props.x}</div>
            <div>Y轴的坐标为{props.y}</div>
        </Fragment>
    )
}

// 高阶组件就是通过加工组件的方式实现的，很难用语言描述
function withXy({component: Component}) {

    return function() {

        const [x, setX] = useState(document.documentElement.clientWidth)
        const [y, setY] = useState(document.documentElement.clientHeight)
    
        useEffect(() => {
            function changeX(){
                setX(document.documentElement.clientWidth)
            }
            function changeY(){
                setY(document.documentElement.clientHeight)
            }
            window.addEventListener('resize', changeX)
            window.addEventListener('resize', changeY)
            return () => {
                window.removeEventListener('resize', changeX)
                window.removeEventListener('resize', changeY)
            }
        }, [x, y])

        return <Component x={x} y={y}/>
    }
}