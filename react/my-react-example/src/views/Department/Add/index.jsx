import React, { Fragment } from "react";

// antd
import { Form, Input, Button, Row, Col, InputNumber, message, Switch, Space } from 'antd';

// API
import { AddDept } from '../../../api/dept'

const { TextArea } = Input;
export default class Add extends React.Component {

    state = {
        loading: false
    }

    formRef = React.createRef()

    onFinish = async (form) => {
        this.setState({ loading: true })
        try {
            let { data: { message: msg } } = await AddDept(form)
            message.success(msg)
            this.formRef.current.resetFields()
            this.setState({ loading: false })
        } catch (error) {
            message.error(error)
            this.setState({ loading: false })
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        let { loading } = this.state
        return (
            <Fragment>
                <Row>
                    <Col span={10}>
                        {/* Form.item由两部分组成 labelCol设置label宽度 wrapperCol设置子元素宽度 */}
                        <Form labelAlign={'left'}
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 18 }}
                            onFinish={ this.onFinish }
                            initialValues={{ number: 1, status: true }}
                            ref={ this.formRef }>
                            <Form.Item required label="部门名称" name='name'>
                                <Input/>
                            </Form.Item>
                            <Form.Item required label="人员数量" name='number'>
                                <InputNumber min={1}/>
                            </Form.Item>
                            <Form.Item required label="禁启用" name='status' valuePropName="checked">
                                <Switch checkedChildren="开启" unCheckedChildren="禁用"  />
                            </Form.Item>
                            <Form.Item required label="描述" name='content'>
                                <TextArea/>
                            </Form.Item>
                            <Form.Item label=" ">
                                <Space style={{ float: "right" }}>
                                    <Button 
                                        type="primary" 
                                        htmlType="submit"
                                        loading={ loading } >添加</Button>
                                    <Button type="primary" onClick={() => this.formRef.current.resetFields()} >重置</Button>
                                </Space>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}