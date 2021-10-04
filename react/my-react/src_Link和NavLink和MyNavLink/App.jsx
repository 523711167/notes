import React from "react";
import {Link ,Route, NavLink } from "react-router-dom"

// About和Home 为路由组件 通过Route组件加载
// 路由组件会接受到Route传给的特殊的props
// <Header /> 一般组件
import About from './pages/About'
import Home from './pages/Home'
import MyNavLink from "./component/MyNavLink";
import Header from "./component/Header";
import './App.css'


export default class App extends React.Component {

    render() {
        return (
            <div className="container py-3" style={{ backgroundColor: '#EEE' }}>
                <div className="row my-2">
                    <div className="col-12" style={{border: '1px solid red', backgroundColor: '#DFD'}}>
                            <Header/>
                    </div>
                </div>
                <div className="row my-2" >
                    <div className="col-3" style={{border: '1px solid red'}}>
                        <div className="d-flex flex-column">
                            {/* 路由链接Link组件 to属性为路由的地址 */}
                            {/* <Link className="d-block" to="/about" >about</Link> */}
                            {/* <Link className="d-block" to="/home" >home</Link> */}
                            {/* 路由组件Navlink 会给点击的路由链接添加active类 */}
                            {/* <NavLink activeClassName="avtive" className="d-block pxx-nav-link" to="/about">about</NavLink> */}
                            {/* <NavLink className="d-block pxx-nav-link" to="/home">home</NavLink> */}
                            {/* 自定义组件MyNavLink 通过传入props，渲染不同的路由链接*/}
                            <MyNavLink to="/about" >About</MyNavLink>
                            <MyNavLink to="/home" >Home</MyNavLink>
                            
                            
                        </div>
                    </div>
                    <div className="col-9" style={{border: '1px solid red'}}>
                        <div className="tab-content">
                            {/* Route注册路由组件， component渲染组件 path注册路径 */}
                            {/* Link 和 Route 都必须包裹在路由器HashRouter内  */}
                            <Route path="/about" component={About}/>
                            <Route path="/home" component={Home}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}