import React, { Fragment } from "react";

// component
import Header from "../Header";
import AsideMenu from "../../../../component/AsideMneu";

export default class Aside extends React.Component {

    render() {
        return (
            <Fragment>
                <Header />
                <AsideMenu />
            </Fragment>
        )
    }
}