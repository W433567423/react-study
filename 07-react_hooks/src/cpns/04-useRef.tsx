import {useEffect, useRef, useState} from 'react'


const App = () => {
    const inputRef = useRef(null)
    const titleRef = useRef(null)

    const numRef = useRef(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        numRef.current = count
    }, [count]);

    const clickTitle = () => {
        // console.log((titleRef.current as any).innerHTML)
        (inputRef.current as any).focus();
        (titleRef.current as any).innerHTML = "are you OK?";
    }
    return (
        <>
            <h2 ref={titleRef} onClick={clickTitle}>Hallo</h2>
            <input type="text" ref={inputRef}/>

            <p>count上一次的值{numRef.current}</p>
            <p>count这一次的值{count}</p>
            <button onClick={() => setCount(count + 10)}>+10</button>
        </>
    )
}

export default App
