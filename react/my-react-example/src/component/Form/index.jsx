import React, { Fragment } from "react";
import { nanoid } from "nanoid";

// antd
import { Form, Input, Button, InputNumber, Switch, Space, message } from 'antd';

// API
import { AddDept } from '@a/dept'

const { TextArea } = Input;

export default class FormCom extends React.Component {

    state = {
        loading: false
    }

    formRef = React.createRef()

    drawer = (type) => {
        switch (type) {
            case 'input':
                return ( <Input /> )
            case 'number':
                return ( <InputNumber min={1}/> )
            case 'switch':
                return ( <Switch checkedChildren="开启" unCheckedChildren="禁用" defaultChecked={true}/> )
            case 'textarea':
                return ( <TextArea /> )
            default:
                return ( <Fragment /> )
        }
    }

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

    render() {

        let { loading, initialValues, columns } = this.props
        return (
            <Fragment>
                 {/* Form.item由两部分组成 labelCol设置label宽度 wrapperCol设置子元素宽度 */}
                <Form labelAlign={'left'}
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 18 }}
                            onFinish={ this.onFinish }
                            initialValues={ initialValues }
                            ref={ this.formRef }>
                                {
                                    columns.map((item) => (
                                        <Form.Item key={nanoid()} required label={item.label} name={item.name}>
                                            { this.drawer(item.type) }
                                        </Form.Item>
                                    ))
                                }
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
            </Fragment>
        )
    }
}