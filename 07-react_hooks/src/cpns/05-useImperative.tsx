import React, {forwardRef, useRef} from "react";

const Input = forwardRef((_props, ref: React.ForwardedRef<HTMLInputElement>) => {
    return <input ref={ref} type="text"/>
})

const App = () => {
    const inputRef = useRef(null)

    return (
        <div>
            <Input ref={inputRef}/>
            <button onClick={() => (inputRef.current as any).focus()}>聚焦</button>
        </div>
    );
};

export default App;
