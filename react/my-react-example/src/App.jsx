import React from "react";
import { Route, Routes } from "react-router-dom"

import Login from "./views/Login"; 
import Index from "./views/Index"

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path='/' component={Login}/>
                    <Route path='/index' component={Index}/>
                </Routes>
            </div>
        )
    }
}