import React from "react";
import { withRouter } from "react-router-dom"; 

import './index.scss'

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";



class Login extends React.Component {

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
export default withRouter(Login)