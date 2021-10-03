import React from "react";
import Header from "./Header/index";
import Middle from "./Middle/index";
import Footer from "./Footer/index"

export default class App extends React.Component {

    state = {
        todos: [
            {id:1, name: '噜噜噜', done: false},
            {id:2, name: '瓜瓜瓜', done: false},
            {id:3, name: 'piapiapia', done: false},
        ]
    }

    addTodos = (todo) => {
       let { todos } = this.state
       let newTodos = [todo, ...todos]
       this.setState({todos: newTodos})
    }

    doneTodo = (todoObj) => {
        console.log(todoObj)
        let { todos } = this.state
        let todo = todos.find((val) => {
            return val.id === todoObj.id;
        });
        todo.done = todoObj.done
        this.setState({ todos: todos })
    }

    doneAll = (val) => {
        let {todos} = this.state 
        let arr = todos.map((todo) => {
            todo.done = val
            return todo
        })
        this.setState({todos: arr})
    }
    deleteTodo = (id) => {
        let {todos} = this.state 
        let arr = todos.filter((val) => {
            return val.id !== id
        })
        this.setState({todos: arr})
    }

    deleteDoneAll = () => {
        let {todos} = this.state 
        let arr = todos.filter((val) => {
            return !val.done
        })
        this.setState({todos: arr})
    }

    render() {
        let {todos} = this.state 
        return (
            <div style={{border: '1px solid red',width: '700px', margin: '0 auto'}}>
                <div style={{padding:"10px"}}>
                    <Header addTodos={this.addTodos}/>
                    <Middle  deleteTodo={this.deleteTodo} doneTodo={this.doneTodo} todos={todos}/>
                    <Footer deleteDoneAll={this.deleteDoneAll}  doneAll={this.doneAll} todos={todos}/>
                </div>
            </div>
        )
    }
}

