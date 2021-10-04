import React from "react";
import axios from "axios";

export default class Search extends React.Component {

    searchInput = React.createRef()

    searchUserByGithub = (even) => {
        let {callbackAppState} = this.props
        let {current: {value}} = this.searchInput
        callbackAppState({isFirst: false, isLoading: true})
        axios.get('api/search/users2').then((response) => {
            let result = response.data.items
            callbackAppState({userInfo: result, isLoading: false})
        },(error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="row py-2">
                <div className="col-6">
                    <div className="input-group">
                        <input ref={this.searchInput} type="text" className="form-control" />
                        <div className="input-group-append">
                            <button onClick={this.searchUserByGithub} className="btn btn-outline-secondary" type="button" id="button-addon2">搜索</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}