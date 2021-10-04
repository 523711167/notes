import React from "react";

export default class List extends React.Component {
    render() {
        let {userInfo, isFirst, isLoading} = this.props
        return (
            <div className="row">
                {   
                    isFirst? <h1>输入内容搜索</h1> :
                    isLoading? <h1>正在加载内容</h1> :
                    userInfo.map((val) => {
                        return (
                        <a style={{display:"block"}} href={val.html_url} key={val.id} className="card col-4">
                            <img src={val.avatar_url} className="card-img-top" alt="..." />
                            <div className ="card-body">
                                <p className ="card-text">{val.login}</p>
                            </div>
                        </a>
                        )
                    })
                }
            </div>
        )
    }
}