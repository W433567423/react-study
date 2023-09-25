import {useLayoutEffect, useState} from "react";

const App = () => {
    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
        // 在DOM渲染前执行
        if (count === 10)
            setCount(0)
    }, [count]);

    return (
        <div>
            count:{count}
            <br/>
            <button onClick={() => setCount(count + 1)}>修改数字</button>
        </div>
    );
};

export default App;
