import React, {forwardRef, useImperativeHandle, useRef} from "react";

const Input = forwardRef((_props, ref: React.ForwardedRef<any>) => {
    const inputRef = useRef(null)
    useImperativeHandle(ref, () => ({
        focus: () => {
            (inputRef.current as any).focus()
        }
    }))
    return <input ref={inputRef} type="text"/>
})

const App = () => {
    const InputRef = useRef(null)

    return (
        <div>
            <Input ref={InputRef}/>
            <button onClick={() => (InputRef.current as any).focus()}>聚焦</button>
        </div>
    );
};

export default App;
