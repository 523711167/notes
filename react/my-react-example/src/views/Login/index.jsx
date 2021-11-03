import React from "react";

import './index.scss'

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";



export default class Login extends React.Component {

    state = {
        toggle: 'Login'
    }

    toggleForm = (toggle) => {
        return (event) => {
            this.setState({toggle})
        }
    }

    render() {
        let {toggle} = this.state
        return (
            <div className="form-wrap">
                {
                    toggle === "Login"?  <LoginForm toggleForm={this.toggleForm} />:  <RegisterForm toggleForm={this.toggleForm}/>
                }
            </div>
        )
    }
}