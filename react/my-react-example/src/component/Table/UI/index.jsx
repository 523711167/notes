import React, { Fragment } from "react";
import { nanoid } from 'nanoid'

// antd
import { Table, Modal, Pagination } from 'antd';
const { Column } = Table;


export default class UIDataTable extends React.Component {
    render() {
        let { dataSource, 
              columns, 
              modal: { isModalVisible }, 
              handleOk, 
              handleCancel, 
              total, 
              onChange } = this.props
        return (
            <Fragment>
                <Table  pagination={false} 
                        rowKey={'id'} 
                        dataSource={dataSource} 
                        bordered={true} 
                        scroll={{ y: 'calc(100vh - 300px)' }}>
                    {
                        columns.map(column => {
                            return (
                            <Column key={nanoid()} {...column} />
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