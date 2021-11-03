import React, { Fragment } from "react";

//antd
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

// api
import { Login, GetCode } from '../../../api/account';
import { email_validator } from "../../../utils/validator";

export default class LoginForm extends React.Component {

    // 用户输入框
    input_username_ref = React.createRef()

    state = {
        control_button_dissable: true,
        control_button_text: "获取验证码",
        control_button_loading: false,
    }


    //登陆
    onFinish = (form) => {
        Login().then((resolve, reject) => {
            console.log(resolve)
        })
        console.log('form表单提交',form)
    }

    //获取验证码
    getCode = async () => {
        let email = this.input_username_ref.current.props.value
        try {
            let {status, data:{message}} = await GetCode({username: email, module: 'register'})
            console.log(message)
            this.setState({control_button_loading: true, control_button_text: "发送中"})
            if (status === 200) {
                let num = 3
                let timer = setInterval(() => {
                    num--;
                    if (num <= 0) {
                        this.setState({
                            control_button_loading: false,
                            control_button_text: '重新获取'
                        }, () => {
                            clearInterval(timer)
                        })
                        return;
                    }
                    this.setState({ control_button_text: `${num}S` });

                }, 1000);
            }
        } catch (error) {
            this.setState({
                control_button_loading: false,
                control_button_text: '重新获取'
            })
        }
    }

    render() {
        let {toggleForm} = this.props
        let {control_button_dissable, control_button_text, control_button_loading} = this.state
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
                                            validator(_, value) {
                                                if (email_validator(value)) {
                                                    _this.setState({control_button_dissable: false})
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
                                    <Button loading={control_button_loading} onClick={this.getCode} disabled={control_button_dissable} block type="danger" >
                                        {control_button_text}
                                    </Button>
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