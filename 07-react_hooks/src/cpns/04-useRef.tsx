import {useRef} from 'react'


const App = () => {
    const inputRef = useRef(null)
    const titleRef = useRef(null)

    const clickTitle = () => {
        // @ts-ignore
        (titleRef.current as any).innerHTML = "are you OK?"
        (inputRef.current as any).focus()
    }
    return (
        <>
            <h2 ref={titleRef} onClick={clickTitle}>Hallo</h2>
            <input type="text" ref={inputRef}/>
        </>
    )
}

export default App
