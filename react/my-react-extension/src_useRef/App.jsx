import React, { Fragment, useCallback, useMemo, useRef, useState } from "react";

let like = 0
function ChilC() {

    // 函数组件重新渲染之间的数据是不可以共享的，比如定义的函数、变量如果不进过特殊的useCallback、useMemo的处理
    // ref定义的变量就是可以在不同渲染之间共享的一个变量
    // createRef每次都会返回个新的引用;而useRef不会随着组件的更新而重新创建
    // https://blog.csdn.net/u011705725/article/details/115634265
    let ref = useRef(0)

    return (
        <Fragment>
            {/* like是类似java的全局环境变量 */}
            {/* ref是在当前这个组件中全局变量 */}
            <button onClick={ () => {
                like = like + 1
                ref.current = ref.current + 1
            }}>赞</button>
            <button onClick={ () => {
                alert(like)
                alert(ref.current)
            }}>提示</button>
        </Fragment>
    )
}



function App() {

    // 函数组件重新渲染之间的数据是不可以共享的，比如定义的函数、变量如果不进过特殊的useCallback、useMemo的处理
    // ref定义的变量就是可以在不同渲染之间共享的一个变量

    return (
        <Fragment>
                <ChilC />
                <ChilC />
                <ChilC />
        </Fragment>

    )
}

export default App