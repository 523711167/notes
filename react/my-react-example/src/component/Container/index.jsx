import React, { Fragment } from "react";
import { Switch } from "react-router-dom";

// 路由
import PrivateRouter from '../PrivateRouter/index'

// View组件
import User from "../../views/User";
import Dept from "../../views/Dept";

export default class Container extends React.Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <PrivateRouter path='/index/user/list' component={User}/>
                    <PrivateRouter path='/index/user/add' component={Dept}/>
                </Switch>
            </Fragment>
        )
    }
}