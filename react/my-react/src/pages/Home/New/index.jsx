import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Detail from "./Detail";

export default class New extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {/* 第一种params传递参数方式 */}
                    {/* <Link to="/home/new/detail/1">早上好</Link>
                    <Link to="/home/new/detail/2">中午好</Link>
                    <Link to="/home/new/detail/3">晚上好</Link> */}
                    {/* 第二种query传参方式 */}
                    {/* <Link to="/home/new/detail?id=1">早上好</Link>
                    <Link to="/home/new/detail?id=2">中午好</Link>
                    <Link to="/home/new/detail?id=3">晚上好</Link> */}

                    {/* 第三种传递state参数 */}
                    <Link to={{pathname: '/home/new/detail', state: {id: '1'}}}>早上好</Link>
                    <Link to={{pathname: '/home/new/detail', state: {id: '2'}}}>中午好</Link>
                    <Link to={{pathname: '/home/new/detail', state: {id: '3'}}}>晚上好</Link>
                </ul>
                <div>
                    <Switch>
                        {/* 第一种传递接受方式 */}
                        {/* <Route path="/home/new/detail/:id" component={Detail}/> */}
                        {/* 第二种接受方式 第三种接受方式*/}
                        <Route path="/home/new/detail" component={Detail}/>
                    </Switch>   
                </div>
            </div>
        )
    }
}