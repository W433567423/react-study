import {useEffect, useState} from "react";

const Cpn1 = () => {
    useLogLife('Cpn1')
    return <h3>Cpn1</h3>
}
const Cpn2 = () => {
    useLogLife('Cpn2')
    return <h3>Cpn2</h3>
}

const APP = () => {
    const [show, setShow] = useState(true)

    return (
        <div>
            <button onClick={() => setShow(!show)}>切换展示</button>
            {show && <Cpn1/>}
            {!show && <Cpn2/>}
        </div>
    );
};

export default APP;

// 自定义的hook用于打印组件的创建/销毁
const useLogLife = (cpnName: string) => {
    useEffect(() => {
        console.log(`${cpnName}组件被创建`)
        return () => console.log(`${cpnName}组件被销毁`)
    }, []);
}
