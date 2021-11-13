import React, { Fragment } from "react";

// antd
import { Form, Input, Button, Row, Col, InputNumber, message, Switch, Space } from 'antd';

// API
import { AddDept } from '../../../api/dept'

const { TextArea } = Input;
export default class Add extends React.Component {

    formRef = React.createRef()

    onFinish = async (form) => {
        console.log(form)
        try {
            let { data, data: { resCode, message: msg } } = await AddDept(form)
            console.log(data)
            if (resCode === 200) {
                message.success(msg)
            } else {
                message.error(msg)
            }
        } catch (error) {
            message.error(error)
        }
    }

    render() {
        return (
            <Fragment>
                <Row>
                    <Col span={10}>
                        {/* Form.item由两部分组成 labelCol设置label宽度 wrapperCol设置子元素宽度 */}
                        <Form labelAlign={'left'}
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 18 }}
                            onFinish={this.onFinish}
                            initialValues={{ number: 1 }}
                            ref={this.formRef}>
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
                            <Form.Item label="禁启用">
                                <Space style={{ float: "right" }}>
                                    <Button type="primary" htmlType="submit" >添加</Button>
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