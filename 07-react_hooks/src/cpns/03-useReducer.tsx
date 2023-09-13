import {useReducer} from 'react'

const reducer = (state: any, action: { type: any; num: any }) => {
    switch (action.type) {
        case 'change':
            return state + action.num
        default :
            return state
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, 0)

    return (
        <>
            <div>
                <h2>Hallo</h2>
                <p>state is {state}</p>
                <button onClick={() => dispatch({type: 'change', num: 1})}>+1</button>
                <button onClick={() => dispatch({type: 'change', num: -1})}>-1</button>
            </div>
        </>
    )
}

export default App
