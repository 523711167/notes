import React, { Fragment } from "react";

// antd
import { Form, Input, Button, message} from 'antd';

import TableComponent from '@c/Table'
import { ListDept, DeleteDept, StatusDept } from '@/api/dept.js'


export default class List extends React.Component {

    render() {
        return (
            <Fragment>
                <TableComponent />
            </Fragment>
        )
    }
}