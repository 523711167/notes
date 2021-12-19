import React, { Fragment, useReducer } from "react";



function Count(props) {

    let [ state, dispatch ] = useReducer(reducer, props.count)

    return (
        <Fragment>
            Count: {state}
            <button onClick={ () => dispatch({ type: 'reset' ,defualValue: props.count })}>reset</button>
            <button onClick={ () => dispatch({ type: 'add' })}>add</button>
            <button onClick={ () => dispatch({ type: 'sub' })}>sub</button>


        </Fragment>
    )
}

function reducer(state, action) {
    console.log(action)
    let { type } = action
    switch (type) {
        case 'add':
            return state + 1 
        case 'sub':
            return state - 1 
        case 'reset':
            return action.defualValue
        default:
            return { } 
    }
}

function App() {

    return (
        <Count count={9}/>
    )
}

export default App