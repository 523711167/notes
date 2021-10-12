import React from "react";

export default class App extends React.PureComponent {
// PureComponent 重新写了shouldUpdateComponent函数，比较了render前传进来的props和state
// 和组件当前状态下的state和props，决定是否render

// component 
// 1只要调用setstate函数，就会发生render
// 2父组件render，子组件也会发生render
    state = {
        car: '别克'
    }

    changeCar = () => {
        // React很多地方传递对象，最好不要用同一个引用的对象，用全新的对象
        this.setState({car: '奥迪'})
    }

    render() {
        return (
            <div>
                <h1>{this.state.car}</h1>
                <input onClick={this.changeCar} type="button"  value='我要换车'/>
                <A />
            </div>
        )
    }
}


class A extends React.Component {

    render() {
        console.log('@@@');
        return (
            <div>
                我啥也没有接收到，我不需要render，通过PureComponent
            </div>
        )
    }
}


