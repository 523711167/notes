import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom"

import Login from "./views/Login"; 
import Index from "./views/Index"
import PrivateRouter from "./component/PrivateRouter";

export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <PrivateRouter path='/index' component={Index}/>
                    <Redirect to='/login'/>
                </Switch>
            </Fragment>
        )
    }
}