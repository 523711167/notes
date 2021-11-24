import React, { Fragment } from "react";

// antd
import { Form, Input, Button, message} from 'antd';

import TableComponent from '@c/Table'
import { ListDept, DeleteDept, StatusDept } from '@/api/dept.js'


export default class List extends React.Component {

    state = {
        data: [],
        total: 0, 
        param: {
            name: '',
            pageNumber: 1,
            pageSize: 10
        },
        modal: {
            isModalVisible: false,
            id: ''
        }
    }

    componentDidMount() {
        // this.loadingdata()
    }

    onFinish = ({ name }) => {
        this.setState({
            param: {
                name,
                pageNumber: 1,
                pageSize: 10
            }
        }, () => {
            this.loadingdata()
        })
    }

    loadingdata = async () => {
        let { param } = this.state
        try {
            let { data: { data: { data, total } } } = await ListDept(param)
            this.setState({
                data,
                total
            })
        } catch (error) {
            this.setState({
                data: []
            })
        }
    }

    onDeleteRow =  ({ id }) => {
        return (event) => {
            this.setState({
                modal: {
                    isModalVisible: true,
                    id
                }
            })
        }
    }

    handleOk = async (event) => {
        let { modal: { id } } = this.state
        try {
            let { data: { message: msg }} = await DeleteDept({ id })
            message.success(msg)
            this.loadingdata()
        } catch (error) {
            message.error(error)
        }
        this.setState({
            modal: {
                isModalVisible: false,
                id: ''
            }
        })
    }

    handleCancel = (event) => {
        this.setState({
            modal: {
                isModalVisible: false,
                id: ''
            }
        })
    }

    onStatusChange =  ({ id }) => {
        return async (checked) => {
            console.log(id, checked);
            try {
                let { data } = await StatusDept({
                    id,
                    status: checked
                })
                console.log(data)
                // message.success(msg)
                // this.loadingdata()
            } catch (error) {
                console.log('error', error)
                message.error(error)
            }
        }
    }

    onChange = (page, pageSize) => {
        this.setState({
            param: {
                pageNumber: page,
                pageSize
            }
        }, () => {
            this.loadingdata()
        })
    }

    render() {
        return (
            <Fragment>
                {/* <Form onFinish={this.onFinish} layout={'inline'}>
                    <Form.Item label="部门名称" name="name">
                        <Input />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                    </Form.Item>
                </Form> */}
                <TableComponent />
                {/* <Table pagination={false} rowKey='id' dataSource={data} bordered={true} scroll={{ y: 'calc(100vh - 300px)' }}>
                    <Column title="部门名称" dataIndex="name" key="name" />
                    <Column title="人员数量" dataIndex="number" key="number" />
                    <Column title="禁用状态" 
                            dataIndex="status" 
                            key="status" 
                            render={(text, record, index) => {
                                return (
                                    <Switch onChange={this.onStatusChange(record)} checkedChildren="开启"  unCheckedChildren="禁用" defaultChecked={text} />
                                )
                            }}/> 
                    <Column title="操作项" 
                            dataIndex="operation" 
                            key="operation" 
                            render={(text, record, index) => {
                                return (
                                    <Space>
                                        <Button type="primary">
                                            <Link to={{ pathname: '/index/department/add', state: { id: record.id}}}>编辑</Link>
                                        </Button>
                                        <Button onClick={this.onDeleteRow(record)} type="danger">删除</Button>
                                    </Space>
                                )
                            }} /> 
                </Table> */}
                {/* <Pagination style={{ float: 'right' }} 
                            showQuickJumper 
                            showSizeChanger
                            defaultPageSize={5}
                            pageSizeOptions={[5, 10]}
                            defaultCurrent={1} 
                            total={total} 
                            onChange={this.onChange}
                            showTotal={ otal => `总共 ${total} 条` }/> */}
                {/* <Modal  title="提示！" 
                        visible={isModalVisible} 
                        onOk={this.handleOk} 
                        onCancel={this.handleCancel}
                        okText='确认'
                        cancelText='取消'>
                    <p style={{ textAlign: 'center' }}>你确定要删除吗？<strong style={{ color: 'red'}}>删除成功数据无法回复</strong></p>
                </Modal> */}
            </Fragment>
        )
    }
}