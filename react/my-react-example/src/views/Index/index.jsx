import React, { Fragment } from "react";

// component
import Aside from "./components/Aside";
import Collapse from "../../component/Collapse";
import TabCom from "@c/Tabs";
// css
import './index.scss'

// Andt
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;


export default class Index extends React.Component {

    state = {
        collapsed: false
    }

    triggerCollapse = (collapsed) => {
        this.setState({
            collapsed
        })
    }

    render() {
        let { collapsed } = this.state
        return (
            <Fragment>
                 <Layout className='layout-warp'>
                    <Sider 
                        width={250}
                        collapsed={collapsed}
                        className='sider-warp'>
                        <Aside />
                    </Sider>
                    <Layout>
                        <Header className='layout-header'>
                            <Collapse collapsed={collapsed}  triggerCollapse={this.triggerCollapse} />
                        </Header>
                        <Content>
                            <TabCom />
                        </Content>
                    </Layout>
                </Layout>
            </Fragment>
        )
    }
}