import React from "react";
import {Switch, Route, Redirect} from "react-router-dom"

import New from "./New";
import Todo from "./Todo";

import MyNavLink from "../../component/MyNavLink";


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <MyNavLink to="/home/new" >new</MyNavLink>
                    <MyNavLink to="/home/todo">todo</MyNavLink>
                </div>
                <div>
                    <Switch>
                        {/* 疑问 既然Switch组件控制路由只能匹配一次，为什么二级路由可以匹配 */}
                        {/* /home/new 第一次已经和/home进行了模糊匹配，为什么还是可以和二级路由再次匹配 */}
                        {/* 路由匹配的原理到底是什么 */}
                        <Route path="/home/new" component={New} />
                        <Route path="/home/todo" component={Todo}/>
                        <Redirect to="/home/new" / >
                    </Switch>
                </div>
            </div>
        )
    }
}