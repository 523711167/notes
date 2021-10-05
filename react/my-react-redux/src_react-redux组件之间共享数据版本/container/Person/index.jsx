import React from "react";
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'

import { addPerson as addPersonAction } from '../../redux/action/person'

class Person extends React.Component {

    // react-redux组件通信版本
    // 第一步创建Person容器组件和UI组件
    // 第二步，contant.js定义type字符串，创建Person的action对象和reducer对象
    // 第三步，store对象中通过combineReducers函数添加persionReducer对象
    // 第四步，添加redux开发者工具 ，安装插件redux-devtools-extension,加添配置
    // 


    addPerson = (event) => {
        let { addPerson } = this.props
        let username = this.username.value
        let age = this.age.value
        addPerson({ id: nanoid(), username, age })
        this.username.value = ''
        this.age.value = ''
    }

    render() {
        console.log(this.props);
        let { person } = this.props
        return (
            <div>
                <h1>我是Person组件  计算结果 {this.props.count}</h1>
                姓名<input ref={node => this.username = node} type="text" />
                年龄<input ref={node => this.age = node} type="text" />
                <button onClick={this.addPerson}>添加人员</button>
                <ul>
                    {
                        person.map((val) => {
                            return (
                                <ul>
                                    <li>{val.id}</li>
                                    <li>{val.username}</li>
                                    <li>{val.age}</li>
                                </ul>
                            )

                        })
                    }

                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}


export default connect(mapStateToProps, {
    addPerson: addPersonAction
})(Person)