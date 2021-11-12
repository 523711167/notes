import React, { Fragment } from "react";
import { withRouter } from "react-router-dom"; 

//antd
import { Form, Input, Button, message, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
//api
import { Login } from '../../../api/account';
import { email_validator } from "../../../utils/validator";
import { setToken } from "../../../utils/session";

import Code from "../../../component/Code";

class LoginForm extends React.Component {

    // 用户输入框
    input_username_ref = React.createRef()
    input_password_ref = React.createRef()
    input_code_ref = React.createRef()

    state = {
        username: '',
    }

    //登陆
    onFinish = async (form) => {
        let { history } = this.props
        let username = this.input_username_ref.current.state.value
        let password = this.input_password_ref.current.state.value
        let code = this.input_code_ref.current.state.value
        try {
            let { data, data: { data: { token, message: msg } } } = await Login({username, password, code})
            if (data.resCode === 0) {
                message.success(msg)
                setToken(token)
                history.push('/index')
            } else {
                message.warn(msg)
            }
        } catch (error) {
            message.error(error)
        }
    }

    componentWillUnmount() {
        message.destroy()
    }

    monitor_username = (event) => {
        let username = event.target.value
        this.setState({
            username
        })
    }

    render() {
        let { toggleForm } = this.props
        let { username } = this.state
        const _this = this;
        return (
            <Fragment>
                <div className="form-header">
                    <h4 className="colum">登陆</h4>
                    <span onClick={toggleForm('RegisterForm')}>账号注册</span>
                </div>
                <div>
                    <Form
                        onFinish={this.onFinish}
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}>
                        <Form.Item
                            name="username"
                            rules={[
                                        { required: true, message: '邮箱不可以为空' },
                                        (FormInstance) => ({
                                            validator(_, username) {
                                                if (email_validator(username)) {
                                                    _this.setState({
                                                        username
                                                    })
                                                    return Promise.resolve();
                                                } else {
                                                    return Promise.reject(new Error('请输入正确的邮箱'));
                                                }
                                            },
                                        }),
                                    ]} >
                            <Input  
                                ref={this.input_username_ref} 
                                onChange={this.monitor_username} 
                                prefix={<UserOutlined className="site-form-item-icon" />} 
                                placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                { required: true, message: 'Please input your Password!' }
                                ]}>
                            <Input  prefix={<UserOutlined className="site-form-item-icon" />} 
                                    placeholder="Password" 
                                    ref={this.input_password_ref}/>
                        </Form.Item>
                        <Form.Item name="code" rules={[{ required: true, message: 'Please input your Password!' }]}>
                            <Row gutter={13}>
                                <Col span={15}>
                                    <Input
                                        ref={this.input_code_ref}  
                                        prefix={<LockOutlined />} 
                                        placeholder="验证码" />
                                </Col>
                                <Col span={9}> 
                                    <Code username={username}/>
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item>
                            <Button block type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(LoginForm)