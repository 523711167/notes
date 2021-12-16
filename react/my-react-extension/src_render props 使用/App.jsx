import React, { Fragment } from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                <h1>移动鼠标!</h1>
                <p>当前的鼠标位置是 ({this.state.x}, {this.state.y})</p>
                <Cat x={this.state.x} y={this.state.y}/>
            </div>
        );
    }
}

export default App


function Cat(props) {

    return (
        <Fragment>
            <img src="/cat.jpg" alt='123' style={{ position: 'absolute', left: props.x, top: props.y }} />
        </Fragment>
    )
}