import React from "react";

export default class Footer extends React.Component {

    myRef = React.createRef()

    state = {
        checked: false
    }

    doneAll = (event) => {
        let {doneAll} = this.props
        doneAll(event.target.checked)
    }

    deleteDoneAll = (event) => {
        let node = this.myRef.current
        node.checked = false
        let {deleteDoneAll} = this.props
        deleteDoneAll()
    }

    render() {
        let {todos} = this.props
        let all = todos.length
        let doneAll = todos.filter((val) => {
            return val.done;
        }).length;

        return (
            <div>
                <input ref={this.myRef} onChange={this.doneAll} type="checkbox"/>已完成{doneAll}/全部{all}
                <input id="pmm" onClick={this.deleteDoneAll} type="button" value="清除已完成任务" style={{float: 'right'}} />
            </div>
        )
    }
}