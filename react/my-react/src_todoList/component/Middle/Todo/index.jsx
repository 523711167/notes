import React from "react";

export default class Todo extends React.Component {
    
    state = {
        bgc: false
    }

    showbgc = (event) => {
       this.setState({bgc: true})
    }

    hiddenbgc = (event) => {
       this.setState({bgc: false})
    }

    doneTodo = (event) => {
       let {doneTodo, name, id} = this.props
       let {checked} = event.target
       doneTodo({id: id, name: name, done: checked})
    }

    deleteTodo = (id) => {
        let {deleteTodo} = this.props
        return (event) => {
            deleteTodo(id)
        }
    }

    render() {
        let {name, done, id} = this.props
        let {bgc} = this.state
        return (
            <div style={{padding: '10px 0px', border: '1px solid #EEE', backgroundColor: bgc? '#EEE': '#FFF'}}
                onMouseOver={this.showbgc}
                onMouseOut={this.hiddenbgc}>
                <input id={id}  onChange={this.doneTodo} type="checkbox" checked={done}/>{name}
                <input onClick={this.deleteTodo(id)} type="button" value='删除' style={{display: bgc? 'block': 'none', float: 'right'}} />
            </div>
            
        )
    }
}