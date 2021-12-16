import React, { Fragment } from "react";
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// Route
import route from "../../Route/route.js";

// andt
import { Menu } from 'antd';
import { MailOutlined, ContainerOutlined } from '@ant-design/icons';

import { addTabAction, onOpenMenuAction } from '@s/action/AsideMenu'

const { SubMenu } = Menu;
class AsideMenu extends React.Component {

    componentDidMount() {
        let { history } = this.props
        history.push('/welcome')
    }

    // 点击添加标签
    onClick = ({ item, key, keyPath, domEvent }) => {
        let { addTab } = this.props
        let title = domEvent.target.text
        addTab([{ title, key }], [key])
    }

    onOpenChange = (openKeys) => {
        let { onOpenMenu } = this.props
        onOpenMenu(openKeys[openKeys.length - 1] === undefined ? [] : [openKeys[openKeys.length - 1]])
    }

    renderMenu = ({ title, key }) => {
        return (
            <Menu.Item key={key} icon={<ContainerOutlined />}><Link to={key} children={title} /></Menu.Item>
        )
    }

    renderSubMenu = ({ title, key, child }) => {
        return (
            <SubMenu
                key={key}
                icon={<MailOutlined />}
                title={title}
                onTitleClick={this.onTitleClick}>
                {
                    child.map((item) => {
                        return item.child && item.child.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item)
                    })
                }
            </SubMenu>
        )
    }

    render() {
        let { AsideMenu: { selectedKeys, openKeys } } = this.props
        return (
            <Fragment>
                <Menu
                    onOpenChange={this.onOpenChange}
                    onClick={this.onClick}
                    selectedKeys={selectedKeys}
                    openKeys={openKeys}
                    theme='dark'
                    mode="inline">
                    {
                        route && route.map((item) => {
                            return item.child && item.child.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item)
                        })
                    }
                </Menu>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        AsideMenu: state.AsideMenu
    }
}

const mapDispatchToProps = (dispatch) => ({

    addTab: (selectMenu, selectedKeys) => {
        dispatch(addTabAction({
            data: {
                selectMenu,
                selectedKeys
            }
        }))
    },
    onOpenMenu: (openKeys) => {
        dispatch(onOpenMenuAction({
            data: {
                openKeys
            }
        }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AsideMenu))