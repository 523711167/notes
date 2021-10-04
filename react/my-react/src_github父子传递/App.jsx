import React from "react";

import Search from "./component/search";
import List from "./component/List";


export default class App extends React.Component {

    state = {
        userInfo: [],
        isFirst: true,
        isLoading: false,
        err: '',

    }

    callbackAppState = (appState) => {
        console.log(appState)
        this.setState(appState)
    }

    render() {
        return (
            <div className='container' style={{backgroundColor: '#EEE'}}>
                <Search callbackAppState={this.callbackAppState}/>
                <List {...this.state}/>
            </div>
        )
    }
}