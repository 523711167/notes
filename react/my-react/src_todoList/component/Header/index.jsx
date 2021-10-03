import React from "react";
import {nanoid} from 'nanoid'

export default class Header extends React.Component {

    addTodo = (event) => {
        let { keyCode, target } = event
        let val = target.value;
        if (keyCode !== 13 || val.trim() === '') {
            return;
        }
        const todoObj = { id: nanoid(), name: val, done: false }
        this.props.addTodos(todoObj)
        target.value = ''
    }

    render() {
        return (
            <div >
                <input  
                onKeyUp={this.addTodo}
                style={{width:'100%',height:'40px'}} 
                type="text" 
                placeholder="输入需要完成的事项，回车键添加"/>
            </div>
        )
    }
}