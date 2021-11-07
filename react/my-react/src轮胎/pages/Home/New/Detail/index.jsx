import React from "react";

let app = [
    {id: '1', title: '哦哦哦哦哦', content: 'oooo'},
    {id: '2', title: '想休息休息', content: 'xxxx'},
    {id: '3', title: '拍拍拍拍拍', content: 'pppp'}
]


export default class Detail extends React.Component {
    render() {
        //这个ID是字符类型
        // 第一种传参，解析方式
        // let {match:{params:{id}}} = this.props

        // 第二种解析参数方式
        // let {location:{search}} = this.props
        // let id = search.slice(1).split('=')[1]

        // 第三种解析方式，存在hash路由的时候，刷新state丢失
        // 以后不管怎么样主见一律用字符串类型
        let id = this.props.location.state.id

        // 编程式路由导航就是通过props下在history对象api属性操作，路由组件才有的属性
        let result = app.find((val) => {
            return val.id === id
        })
        return (
            <ul>
                <li>{result.id}</li>
                <li>{result.title}</li>
                <li>{result.content}</li>
            </ul>
        )
    }
}