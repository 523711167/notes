import React, {Fragment} from "react";

// antd
import { Form, Input, Button, message, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// 组件
import Code from "../../../component/Code";

// API
import { Register } from "../../../api/account";

export default class RegsiterForm extends React.Component {

    register_email = React.createRef()
    register_password = React.createRef()
    register_passwords = React.createRef()
    register_code = React.createRef()

    state = {
        username: '',
        loading: false,
        disabled: false,
    }


    monitor_username = (event) => {
        let username = event.target.value
        this.setState({
            username
        })
    }

    onFinish = async (event) => {
        let { toggleForm } = this.props
        let username = this.register_email.current.state.value
        let password = this.register_password.current.state.value
        let code = this.register_code.current.state.value
        let { data } = await Register({
                                username,
                                password,
                                code})
        if (data.resCode === 0) {
            message.success('注册成功，自动切换到登陆页')
            this.setState({
                loading: true,
                disabled: true
            })
            toggleForm('Login')()
        } else { 
            message.warn(data.message)
        }
    }

    render() {
        let { toggleForm } = this.props
        let { username, loading, disabled } = this.state
        return (
            <Fragment>
                <div className="form-header">
                    <h4 className="colum">注册</h4>
                    <span onClick={toggleForm('Login')}>登陆</span>
                </div>
                <div>
                    <Form
                        onFinish={this.onFinish}
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}>
                        <Form.Item
                            name="username"
                            validateTrigger="onBlur"
                            rules={[
                                { required: true, message: '邮箱不能为空' },
                                { validateTrigger: "onBlur" }
                                ]}>
                            <Input  
                                ref={this.register_email} 
                                onChange={this.monitor_username} 
                                prefix={<UserOutlined className="site-form-item-icon" />} 
                                placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            validateTrigger="onBlur"
                            name="password"
                            rules={[
                                { required: true, message: '密码不能为空' },
                                { validateTrigger: 'onBlur' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (getFieldValue('passwords') && getFieldValue('passwords') !== value) {
                                            return Promise.reject('两次密码不一致')
                                        }
                                        return Promise.resolve()
                                    }
                                })
                                ]}>
                            <Input
                                ref={this.register_password}  
                                prefix={<UserOutlined className="site-form-item-icon" />} 
                                placeholder="Password" />
                        </Form.Item>
                        <Form.Item
                            validateTrigger="onBlur"
                            name="passwords"
                            rules={[
                                { required: true, message: '密码不能为空' },
                                { validateTrigger: 'onBlur' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (getFieldValue('password') !== value) {
                                            return Promise.reject('两次密码不一致')
                                        }
                                        return Promise.resolve()
                                    }
                                })
                                ]}>
                            <Input 
                                ref={this.register_password}  
                                prefix={<UserOutlined className="site-form-item-icon" />} 
                                placeholder="Password" />
                        </Form.Item>
                        <Form.Item name="code" rules={[{ required: true, message: '请输入验证码' }]}>
                            <Row gutter={13}>
                                <Col span={15}>
                                    <Input
                                        ref={this.register_code} 
                                        prefix={<LockOutlined />} 
                                        placeholder="验证码" />
                                </Col>
                                <Col span={9}>
                                    <Code username={username}/>
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item>
                            <Button 
                                loading={loading}
                                disabled={disabled}
                                block 
                                type="primary" 
                                htmlType="submit" 
                                className="login-form-button">
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Fragment>
        )
    }
}