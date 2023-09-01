import {Component} from 'react'

interface IPropType {
    name: string
    f: () => void
}

interface IStateType {
}

export default class ChildClass extends Component <IPropType, IStateType> {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <h3>this is ChildClass</h3>
                <p>父组件传递的:{this.props.name}</p>
                <button onClick={() => this.props.f()}>调用父组件函数</button>
            </div>
        )
    }

    changeText() {

    }
}
