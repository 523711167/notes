import React, { Fragment } from "react";

// antd
import { Table, Modal, Pagination, Form, Input, Button } from 'antd';
const { Column } = Table;


export default class UIDataTable extends React.Component {
    render() {
        let { dataSource, 
              columns, 
              modal: { isModalVisible }, 
              handleOk, 
              handleCancel, 
              total, 
              onChange,
              forms,
              onFinish } = this.props
        return (
            <Fragment>
                <Form onFinish={onFinish} layout={'inline'}>
                    {
                        forms.map(({ label, name }) => {
                            return (
                                <Form.Item label={label} name={name}>
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
                <Table  pagination={false} 
                        rowKey='id' 
                        dataSource={dataSource} 
                        bordered={true} 
                        scroll={{ y: 'calc(100vh - 300px)' }}>
                    {
                        columns.map(column => {
                            return (
                            <Column {...column} />
                            )
                        })
                    }
                </Table>
                <Pagination style={{ float: 'right' }} 
                            showQuickJumper 
                            showSizeChanger
                            defaultPageSize={5}
                            pageSizeOptions={[5, 10]}
                            defaultCurrent={1} 
                            total={total} 
                            onChange={onChange}
                            showTotal={ total => `总共 ${total} 条` }/>
                <Modal  title="提示！" 
                        visible={isModalVisible} 
                        onOk={handleOk} 
                        onCancel={handleCancel}
                        okText='确认'
                        cancelText='取消'>
                    <p style={{ textAlign: 'center' }}>你确定要删除吗？<strong style={{ color: 'red'}}>删除成功数据无法回复</strong></p>
                </Modal>
            </Fragment>
        )
    }
}