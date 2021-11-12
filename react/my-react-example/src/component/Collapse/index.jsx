import React, { Fragment } from "react";

import { LeftCircleOutlined, DownCircleOutlined } from '@ant-design/icons';

export default class Collapse extends React.Component {

    state = {
        collapsed: false,
        arrow: 'left'
    }

    collapse = (event) => {
        let { cbCollapse } = this.props
        let { collapsed, arrow } = this.state
        cbCollapse(!collapsed)
        this.setState({
            collapsed: !collapsed,
            arrow: arrow === 'left'? 'right': 'left'
        })

    }

    render() {
        let { collapsed, arrow } = this.state
        return (
            <Fragment>
                <span onClick={this.collapse} style={{fontSize: '35px', lineHeight: '75px', cursor: 'pointer'}}>
                    {
                        arrow === 'left'? <DownCircleOutlined />: <LeftCircleOutlined />
                    }
                </span>
            </Fragment>
        )
    }
}