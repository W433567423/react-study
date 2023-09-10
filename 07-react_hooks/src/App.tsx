import {useState} from 'react'

function App() {
    const [count, setCount] = useState(0)
    console.log(1)
    return (
        <>
            <div>
                <h2>Hallo</h2>
                <p>count is {count}</p>
                <button onClick={() => setCount(count - 1)}>
                    -
                </button>
                <button onClick={() => setCount(count + 1)}>
                    +
                </button>
            </div>
        </>
    )
}

export default App
