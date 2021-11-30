import React, { Fragment } from "react";

// component
import Aside from "./components/Aside";
import Container from "../../component/Container";
import Collapse from "../../component/Collapse";
// css
import './index.scss'

// Andt
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;


export default class Index extends React.Component {

    state = {
        collapsed: false
    }

    cbCollapse = (collapse) => {
        this.setState({
            collapsed: !collapse
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
                            <Collapse cbCollapse={this.cbCollapse} />
                        </Header>
                        <Content className='layout-main'>
                            <Container />
                        </Content>
                    </Layout>
                </Layout>
            </Fragment>
        )
    }
}