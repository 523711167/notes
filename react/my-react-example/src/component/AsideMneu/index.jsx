import React, { Fragment } from "react";
import { Link } from 'react-router-dom'

// Route
import  route  from "../../Route/route.js";

// andt
import { Menu } from 'antd';
import {  MailOutlined, ContainerOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
export default class AsideMenu extends React.Component {

    state = {
        selectedKeys: ['/index'],
        openKeys: [],
    }

    componentDidMount() {

    }

    selectedMenu = ({ item, key, keyPath, domEvent }) => {
        this.setState({ selectedKeys: [ key ] })
    }

    onOpenChange = (openKeys) => {
        this.setState({openKeys})
    }

    renderMenu = ({ title, key }) => {
        return (
            <Menu.Item key={key} icon={<ContainerOutlined />}><Link to={key} children={title} /></Menu.Item>
        )
    }

    renderSubMenu = ({ title, key, child}) => {
        return (
            <SubMenu 
                key={key}  
                icon={<MailOutlined />} 
                title={title}>
                {
                    child.map((item) => {
                        return item.child && item.child.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item)
                    })
                }
            </SubMenu>
        )
    }

    render() {
        let { openKeys, selectedKeys } = this.state
        return (
            <Fragment>
                <Menu 
                    onOpenChange={this.onOpenChange}
                    onClick={this.selectedMenu}
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