import React from "react";
import { Route, Redirect } from "react-router-dom";

import { getToken } from "../../utils/cookies";


function PrivateRouter({component: Component, ...rest}) {
    return (
        <Route {...rest} 
                render={(routeProps) => ( getToken() ? <Component {...routeProps}/> : <Redirect to='login'/>)}>
        </Route>
    )
}

export default PrivateRouter