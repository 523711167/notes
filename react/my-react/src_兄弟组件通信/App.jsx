import React from "react";

import Search from "./component/search";
import List from "./component/List";


export default class App extends React.Component {




    render() {
        return (
            <div className='container' style={{backgroundColor: '#EEE'}}>
                <Search />
                <List />
            </div>
        )
    }
}