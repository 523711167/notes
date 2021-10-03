import React from "react";

import Todo from "./Todo/index";

export default class Middle extends React.Component {
    render() {
        let {todos, doneTodo, deleteTodo} = this.props
        return (
            <div style={{display: "flex", flexFlow: "column nowrap" }}>
                {
                    todos.map((val) => {
                       return <Todo deleteTodo={deleteTodo} doneTodo={doneTodo} key={val.id} {...val}/>
                    })
                }
            </div>
        )
    }
}