import {PureComponent} from 'react'

interface IUser {
    name: string
    age: number
}

interface IStateType {
    userList: IUser[]
}

export default class App extends PureComponent<any, IStateType> {
    constructor(props: any) {
        super(props)
        this.state = {
            userList: [
                {name: 'tutu', age: 20},
                {name: 'zhangSanFen', age: 44},
                {name: 'lisi', age: 8},
                {name: 'laoWang', age: 12},
                {name: 'lily', age: 36}
            ]
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.insertDate()}>添加数据</button>
                <ul>
                    {
                        this.state.userList.map((e, i) => (<li>
                            <span key={i}>{`${e.name}   今年${e.age}岁`}</span>
                            <button onClick={() => this.addAge(i)}>age+1</button>
                        </li>))
                    }
                </ul>
            </div>
        )
    }

    insertDate() {
        const newData: IUser = {name: 'new', age: 100}
        this.setState({userList: [...this.state.userList, newData]})
    }


    addAge(index: number) {
        const newList = [...this.state.userList]
        /*其他深拷贝方法
        * this.state.userList.slice(0)
        * this.state.userList.concat()
        * JSON.parse(JSON.stringify(this.state.userList))
        * */
        newList[index].age++
        this.setState({
            userList: newList
        })
    }
}
