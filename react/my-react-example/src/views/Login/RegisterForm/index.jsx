import React, {Fragment} from "react";

// antd
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

import Code from "../../../component/Code";


export default class RegsiterForm extends React.Component {

    state = {
        username: '',
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
        return (
            <Fragment>
                <div className="form-header">
                    <h4 className="colum">注册</h4>
                    <span onClick={toggleForm('Login')}>登陆</span>
                </div>
                <div>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}>
                            <Input  ref={this.input_username_ref} onChange={this.monitor_username} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Password" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Password" />
                        </Form.Item>
                        <Form.Item name="code" rules={[{ required: true, message: 'Please input your Code!' }]}>
                            <Row gutter={13}>
                                <Col span={15}>
                                    <Input prefix={<LockOutlined />} placeholder="验证码" />
                                </Col>
                                <Col span={9}>
                                    <Code username={username}/>
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item>
                            <Button block type="primary" htmlType="submit" className="login-form-button">
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Fragment>
        )
    }
}