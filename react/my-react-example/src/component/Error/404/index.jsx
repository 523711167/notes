import React, { Fragment } from "react";

import { Result, Button } from 'antd';

export default class NotFind extends React.Component {

    state = {
        hasRrror: false
    }

    static getDerivedStateFromError(error) {
        console.log({ hasError: true })
        return { hasError: true };
    }

    render() {
        console.log(this.props.children)
        if(this.state.hasError) {
            return (
                <Fragment>
                    <Result
                        status="404"
                        title="404"
                        subTitle="对不起,你访问的页面不存在"
                        extra={<Button type="primary">关闭页面</Button>}
                    />
                </Fragment>
            )
        }
        return this.props.children; 
    }
}