import React, { Fragment } from "react";
import { connect } from 'react-redux'

import { message } from 'antd';

import { searchAction } from '@s/action/Search'
import UISreach from '@c/Search/UI'
import { ListDept } from '@a/dept'

class Sreach extends React.Component {

    state = {
        config: {
            items: [
                { label: '部门名称', name: 'name' }
            ]
        }
    }

    componentDidMount() {
        let { search } = this.props
        search({ 
            name: '',
            pageNumber: 1,
            pageSize: 10
        })
    }

    onFinish = ({ name }) => {
        let { search } = this.props
        search({ 
            name,
            pageNumber: 1,
            pageSize: 10
        })
    }

    render() {
        let { config } = this.state
        return (
            <Fragment>
                <UISreach onFinish={this.onFinish} {...config}/>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    let { search: { data, total }} = state
    return {
        data,
        total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: async ({ name, pageNumber, pageSize }) => {
            try {
                let { data: { data } } = await ListDept({ name, pageNumber, pageSize })
                dispatch(searchAction(data))
            } catch (error) {
                message.error(error.toString())
                dispatch(searchAction({
                    total: 0,
                    data: []
                }))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sreach)