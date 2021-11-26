import React, { Fragment } from "react";

import TableComponent from '@c/Table'
import Search from '@c/Search'

export default class List extends React.Component {

    render() {
        return (
            <Fragment>
                <Search />
                <TableComponent />
            </Fragment>
        )
    }
}