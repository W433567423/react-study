import {useEffect, useState} from "react";

function App() {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true)

    //依赖某个变量
    useEffect(() => {
        console.log('修改DOM')
    }, [count]);

    // 返回值为卸载时
    useEffect(() => {
        console.log('订阅事件')
        return () => {
            console.log('取消订阅')
        }
    }, []);

    //不依赖=挂载时
    useEffect(() => {
        console.log('网络请求')
    }, []);
    return (
        <>
            <h2>useEffect</h2>
            <h4> {show ? count : ''}</h4>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setShow(!show)}>{show ? '隐藏' : '显示'}</button>
        </>
    )
}

export default App
