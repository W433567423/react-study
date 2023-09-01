import {Component} from 'react'

interface IPropType {

}

interface IStateType {
    text: any,
}

export default class App extends Component <IPropType, IStateType> {
    constructor(props: any) {
        super(props)
        this.state = {
            text: 'react'
        }
        console.log('1-constructor周期')
    }

    render() {
        console.log('2-render周期')
        return (
            <div>
                <p>{this.state?.text}</p>
                <button onClick={() => this.changeText()}>change</button>
            </div>
        )
    }

    changeText() {
        this.setState({text: this.state.text === 'react' ? 'tutu' : 'react'})
    }

    componentDidMount() {
        console.log('3-componentDidMount周期')
    }

    componentDidUpdate(prevProps: Readonly<IPropType>, prevState: Readonly<IStateType>, snapshot?: any) {
        console.log(prevProps, prevState, '4-componentDidUpdate周期')

    }

    componentWillUnmount() {
        console.log('5-componentWillUnmount周期')
    }
}
