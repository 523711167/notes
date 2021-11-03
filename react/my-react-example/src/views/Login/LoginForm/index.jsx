import React, { Fragment } from "react";

//antd
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

// api
import { Login } from '../../../api/account';
import { email_validator } from "../../../utils/validator";

import Code from "../../../component/Code";

export default class LoginForm extends React.Component {

    // 用户输入框
    input_username_ref = React.createRef()

    state = {
        username: '',
    }

    //登陆
    onFinish = (form) => {
        Login().then((resolve, reject) => {
            console.log(resolve)
        })
    }

    monitor_username = (event) => {
        let username = event.target.value
        this.setState({
            username
        })
    }

    render() {
        let {toggleForm} = this.props
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
                            <Input  ref={this.input_username_ref} onChange={this.monitor_username} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Password" />
                        </Form.Item>
                        <Form.Item name="code" rules={[{ required: true, message: 'Please input your Password!' }]}>
                            <Row gutter={13}>
                                <Col span={15}>
                                    <Input  prefix={<LockOutlined />} placeholder="验证码" />
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