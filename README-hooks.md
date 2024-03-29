# Hooks

## 常用Hooks

函数式组件

### useState(initialState)

向组件添加一个状态变量

`const [val, setValue] = useState(0)`

```react
function App() {
    const [count, setCount] = useState(0)
    
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
```

### useEffect(setup, dependencies?)

- 默认情况下，`effect` 会在每次渲染之后执行

- 也可以通过设置第二个参数，依赖项组成的数组 `useEffect(effect,[])`
  ，让它在数组中的值发生变化的时候执行，数组中可以设置多个依赖项，其中的任意一项发生变化，`effect` 都会重新执行

```react
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
```

### useContext(SomeContext)

可以让你读取和订阅组件中的 context

## 其他hooks

### useReducer(reducer, initialArg, init?)

允许向组件里面添加一个 reducer

```react
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
```

> 用于替代useState

### useCallback(fn, dependencies)

允许在多次渲染中缓存函数的 React Hook

> 用于性能优化

### useMemo(calculateValue, dependencies)

在每次重新渲染的时候能够缓存计算的结果

> 用于性能优化

### useRef(initialValue)

引用一个不需要渲染的值

- 引入DOM(或组件)元素
- 保存一个数据,在组件的整个周期不会刷新

#### forwardRef

```tsx
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
```

### useImperativeHandle(ref, createHandle, dependencies?)

能自定义由 ref暴露出来的句柄。

```tsx
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
```

### useLayoutEffect(setup, dependencies?)

相比useEffect，该api会在DOM元素渲染之前进行(阻塞DOM更新)

```tsx
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
```

> 绝大部分情况下使用useEffect即可

### useDeferredValue(value)

可以延迟更新 UI 的某些部分

### useDebugValue(value, format?)

可以在 React 开发工具中为自定义 Hook 添加标签

### useId()

可以生成传递给无障碍属性的唯一 ID

### useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)

订阅外部 store 的 React Hook

### useTransition()

在不阻塞 UI 的情况下更新状态的 React Hook

## 自定义hooks

本质上就是逻辑抽取，不过应当以use开头，不然eslint会报错
