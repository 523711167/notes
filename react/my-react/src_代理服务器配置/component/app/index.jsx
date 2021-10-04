import React from "react";
import axios from 'axios'

export default class App extends React.Component {

    getStudents = (event) => {
        axios.get('http://localhost:3000/api1/students').then((resolved) => {
            console.log(resolved.data)
        }, (error) => {
            console.log(error)            
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudents}>获取5000数据</button>  
                <button onClick={this.getCars}>获取5001数据</button>  
            </div>
        )
    }
}