import React, { Fragment } from "react";
import { Link } from 'react-router-dom'


import { Button, Switch, Space, message } from 'antd';

import  UIDataTable  from '@c/Table/UI'
import { ListDept, StatusDept, DeleteDept } from '@a/dept.js'

export default class TableComponent extends React.Component {

    state = {
        dataConfig: {
            columns: [
                { title: '部门名称', dataIndex: 'name', key: 'name' },
                { title: '人员数量', dataIndex: 'number', key: 'number' },
                { title: '禁用状态', 
                  dataIndex: 'status', 
                  key: 'status', 
                  render: (text, record, index) => {
                    return (
                        <Switch onChange={this.onStatusChange(record)} checkedChildren="开启"  unCheckedChildren="禁用" defaultChecked={text} />
                    )}
                },
                { title: '操作项', 
                  dataIndex: 'operation', 
                  key: 'operation',
                  render: (text, record, index) => {
                    return (
                        <Space>
                            <Button type="primary">
                                <Link to={{ pathname: '/index/department/add', state: { id: record.id}}}>编辑</Link>
                            </Button>
                            <Button onClick={this.onDeleteRow(record)} type="danger">删除</Button>
                        </Space>
                    )}
                }
            ],
            dataSource: [],
            modal: {
                isModalVisible: false,
                id: ''
            },
            total: 0,
            param: {
                name: '',
                pageNumber: 1,
                pageSize: 10
            },
            forms: [
                { label: '部门名称', name: 'name'}
            ]
        }
    }

    componentDidMount() {
        this.loadingdata()
    }

    onStatusChange =  ({ id }) => {
        return async (checked) => {
            try {
                let { data: { message: msg }} = await StatusDept({
                    id,
                    status: checked
                })
                message.success(msg)
                this.loadingdata()
            } catch (error) {
                message.error(error)
            }
        }
    }

    onDeleteRow =  ({ id }) => {
        let { dataConfig } = this.state
        return (event) => {
            this.setState({
                dataConfig: {
                    ...dataConfig,
                    modal: {
                        isModalVisible: true,
                        id
                    }
                }
            })
        }
    }

    handleCancel = (event) => {
        console.log(111);
        let { dataConfig } = this.state
        this.setState({
            dataConfig: {
                ...dataConfig,
                modal: {
                    isModalVisible: false,
                    id: ''
                }
            }
        })
    }

    handleOk = async (event) => {
        let { dataConfig, dataConfig: { modal: { id } }} = this.state
        try {
            let { data: { message: msg }} = await DeleteDept({ id })
            message.success(msg)
        } catch (error) {
            message.error(error)
        }
        this.setState({
            dataConfig: {
                ...dataConfig,
                modal: {
                    isModalVisible: false,
                    id: ''
                }
            }
        }, () => this.loadingdata())
    }

    onChange = (page, pageSize) => {
        let { dataConfig } = this.state
        this.setState({
            dataConfig: {
                ...dataConfig,
                param: {
                    pageNumber: page,
                    pageSize: pageSize
                }
            }
        }, () => {
            this.loadingdata()
        })
    }


    onFinish = ({ name }) => {
        let { dataConfig } = this.state
        this.setState({
            dataConfig: {
                ...dataConfig,
                param: {
                    name,
                    pageNumber: 1,
                    pageSize: 10
                }
            }
        }, () => {
            this.loadingdata()
        })
    }

    loadingdata = async () => {
        let { dataConfig: { param }, dataConfig } = this.state
        try {
            console.log(param)
            let { data: { data: { data, total } } } = await ListDept(param)
            console.log(data)
            this.setState({
                dataConfig: {
                    ...dataConfig,
                    dataSource: [...data],
                    total
                }
            })
        } catch (error) {
            message.error(error.toString())
            this.setState({
                dataConfig: {
                    ...dataConfig,
                    dataSource: [],
                    total: 0
                }
            })
        }
    }

    render() {
        let { dataConfig } = this.state
        return (
            <Fragment>
                <UIDataTable {...dataConfig}  
                             handleCancel={this.handleCancel} 
                             handleOk={this.handleOk} 
                             onChange={this.onChange}
                             onFinish={this.onFinish}/>
            </Fragment>
        )
    }
}