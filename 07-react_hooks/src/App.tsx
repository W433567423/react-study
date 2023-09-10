import {useState} from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <h2>Hallo</h2>
                <p>count is {count}</p>
                <button onClick={() => setCount((count) => count + 1)}>
                    +
                </button>
            </div>
        </>
    )
}

export default App
