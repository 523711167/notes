import React, { Fragment } from "react";
import { nanoid } from 'nanoid'

import { Form, Input, Button } from 'antd';


export default class UISearch extends React.Component {
    
    render() {
        let { onFinish, items } = this.props
        return (
            <Fragment>
                <Form onFinish={onFinish} layout={'inline'}>
                    {
                        items.map(({ label, name }) => {
                            return (
                                <Form.Item key={nanoid()} label={label} name={name}>
                                    <Input />
                                </Form.Item>
                            )
                        })
                    }
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                    </Form.Item>
                </Form>
            </Fragment>
        )
    }
}