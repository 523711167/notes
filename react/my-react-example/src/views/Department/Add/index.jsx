import React, { Fragment } from "react";

// antd
import { Row, Col } from 'antd';

import FormCom from '@c/Form'

export default class Add extends React.Component {

    state = {
        loading: false,
        formConfig: {
            initialValues:  { number: 1, status: true },
            columns: [
                { label: '部门名称', name: 'name', type: 'input', require: true },
                { label: '人员数量', name: 'number', type: 'number', require: true },
                { label: '禁启用', name: 'status', type: 'switch', require: true },
                { label: '描述', name: 'content', type: 'textarea', require: true },
            ],
            
        }
    }

    componentDidMount() {
    }

    render() {
        let { formConfig } = this.state
        return (
            <Fragment>
                <Row>
                    <Col span={10}>
                        <FormCom {...formConfig}/>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}