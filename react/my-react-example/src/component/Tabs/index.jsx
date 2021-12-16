import React, { Fragment } from "react";
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

import { Tabs } from 'antd';

import pathMapComponent from '@c/Container/component'
import PrivateRouter from '@c/PrivateRouter'
import NotFind from '@c/Error/404'

import {
    AppleOutlined
} from '@ant-design/icons';

import { selectedTabAction, deleteTabAction } from '@s/action/AsideMenu'

const { TabPane } = Tabs;

class TabCom extends React.Component {

    componentDidMount() {
        // console.log('componentDidMount')
    }

    componentDidUpdate(preProps, Prestate, snap) {
        // console.log('componentDidUpdate', preProps)
        // console.log('componentDidUpdate', Prestate)
        // console.log('componentDidUpdate', snap)
    }

    onChange = (key, event) => {
        let { history, selectTab } = this.props
        history.push(key)
        selectTab([key])
    }

    onEdit = (targetKey, action) => {
        let { deleteTab, AsideMenu: { showMenus }, history } = this.props
        deleteTab([targetKey])
        let arr = showMenus.filter(item => item.key !== targetKey)
        if (arr.length === 0) {

        } else {
            history.push(arr[arr.length - 1].key)
        }
    }

    render() {
        let { AsideMenu: { showMenus, selectedKeys } } = this.props
        return (
            <Fragment>
                <Tabs type="editable-card"
                    onChange={this.onChange}
                    hideAdd
                    activeKey={selectedKeys[selectedKeys.length - 1]}
                    onEdit={this.onEdit}>
                    {
                        showMenus && showMenus.map(tab => {
                            return (
                                <TabPane tab={<span> <AppleOutlined /> {tab.title} </span>}
                                    key={tab.key}>
                                    {
                                        <NotFind >
                                            <PrivateRouter path={tab.key.toLocaleLowerCase()}
                                                           component={pathMapComponent
                                                                .find(item => item.path.toLocaleLowerCase() === tab.key)
                                                                .component} />
                                        </NotFind>
                                    }
                                </TabPane>
                            )
                        })
                    }
                </Tabs>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    let { AsideMenu } = state
    return {
        AsideMenu
    }

}

const mapDispatchToProps = (dispatch) => ({
    selectTab: (key) => {
        dispatch(selectedTabAction({
            data: {
                selectedKeys: key
            }
        }))
    },
    deleteTab: (key) => {
        dispatch(deleteTabAction({
            data: {
                deleteTabs: key
            }
        }))
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TabCom))