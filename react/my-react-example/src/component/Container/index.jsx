import React, { Fragment } from "react";
import { Switch } from "react-router-dom";

// 路由
import PrivateRouter from '../PrivateRouter/index'

// View组件
import paths from './component.js'

export default class Container extends React.Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    {
                        paths.map((item) => <PrivateRouter 
                                key={item.path.toLocaleLowerCase()} 
                                path={item.path.toLocaleLowerCase()} 
                                component={item.component}/>)
                    }
                </Switch>
            </Fragment>
        )
    }
}