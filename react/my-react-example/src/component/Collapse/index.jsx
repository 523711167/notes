import React, { Fragment } from "react";

import { LeftCircleOutlined, DownCircleOutlined } from '@ant-design/icons';

export default class Collapse extends React.Component {

    collapse = () => {
        let { triggerCollapse, collapsed } = this.props
        triggerCollapse(!collapsed)
    }

    render() {
        let { collapsed } = this.props
        return (
            <Fragment>
                <span onClick={this.collapse} style={{fontSize: '35px', lineHeight: '60px', cursor: 'pointer'}}>
                    {
                        collapsed ? <DownCircleOutlined />: <LeftCircleOutlined />
                    }
                </span>
            </Fragment>
        )
    }
}