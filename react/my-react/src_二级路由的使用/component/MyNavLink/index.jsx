import React from "react";
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends React.Component {
    render() {
        return (
            <NavLink activeClassName="avtive" className="d-block pxx-nav-link" {...this.props}>{this.props.children}</NavLink>
        )
    }
}