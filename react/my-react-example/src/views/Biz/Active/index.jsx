import React, { Fragment } from "react";

export default class Active extends React.Component {
    render() {
        throw new Error('我要测试错误边界')
        return (
            <Fragment>
                工作流
            </Fragment>
        )
    }
}