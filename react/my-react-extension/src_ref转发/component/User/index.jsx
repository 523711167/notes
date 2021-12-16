import React, { Fragment } from "react";


export default class User extends React.Component {
    render() {
        return (
            React.forwardRef((props, ref) => (
                <Fragment>
                    <div ref={ref}>我是拼刀刀</div>
                </Fragment>
            )).render()
        )
    }
}
