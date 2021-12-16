import React, { Fragment } from "react";
import { Tree } from 'antd';
import { Row, Col, Card } from 'antd';


const treeData = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true,
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                    },
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [
                    {
                        title: (
                            <span
                                style={{
                                    color: '#1890ff',
                                }}
                            >
                                sss
                            </span>
                        ),
                        key: '0-0-1-0',
                    },
                ],
            },
        ],
    },
];
export default class UserManage extends React.Component {

    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };

    render() {
        return (
            <Fragment>
                <Row gutter={10} style={{ height: '100%' }}>
                    <Col span={6}>
                        <Card title={'人员管理'} bordered={false} style={{ height: '100%' }}>
                            <Tree
                                checkable
                                defaultExpandedKeys={['0-0-0', '0-0-1']}
                                defaultSelectedKeys={['0-0-0', '0-0-1']}
                                defaultCheckedKeys={['0-0-0', '0-0-1']}
                                onSelect={this.onSelect}
                                onCheck={this.onCheck}
                                treeData={treeData}
                            />
                        </Card>
                    </Col>
                    <Col   span={18}>
                        <Card  title={'人员信息'} bordered={false}>
                            用户管理树
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}