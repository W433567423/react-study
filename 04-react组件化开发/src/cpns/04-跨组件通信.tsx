import {Component, createContext} from "react";

interface IStateType {
    nick: string
}

//创建上下文,并赋默认值
const MyContext = createContext({
    nick: 'tutu'
})


// 提供数据的组件
export default class SetComponent extends Component<any, IStateType> {
    constructor(props: any) {
        super(props);
        this.state = {
            nick: 'set'
        }
    }

    render() {
        return (
            <div>
                <MyContext.Provider value={this.state}>
                    SetComponent
                    <GetClassComponent/>
                </MyContext.Provider>
            </div>
        )
    }

}


// 使用数据的组件
class GetClassComponent extends Component<any, any> {

    render() {
        return (
            <div>GetClassComponent
                <h3>使用数据的类组件</h3>
                {/*@ts-ignore*/}
                <div>获取到数据:{this.context.nick}</div>
                <GetFunctionComponent/>
            </div>)
    }
}

function GetFunctionComponent() {
    return (
        <MyContext.Consumer>
            {
                context => {
                    return (
                        <div>
                            <h3>使用数据的函数组件</h3>
                            <div>获取到数据: {context.nick}</div>
                        </div>
                    )
                }
            }
        </MyContext.Consumer>
    )
}


// 需要使用context的组件赋值
GetClassComponent.contextType = MyContext
