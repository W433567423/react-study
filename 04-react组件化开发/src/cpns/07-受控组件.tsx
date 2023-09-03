import React, {PureComponent} from 'react';

interface IPropsType {
}

class App
    extends PureComponent<IPropsType, any> {
    constructor(props: IPropsType) {
        super(props);
        this.state = {
            username: '',
            fruit: 'banana'
        }
    }

    render() {
        return (
            <div>
                {/*
                默认行为,点击提交会在网址后加上一个?
                <form>
                    <label htmlFor="username">
                        用户<input type="text" id="username"/>
                    </label>
                    <label htmlFor="username">
                        <input type='submit' value="提交"/>
                    </label>
                </form>
                */}

                {/*受控组件*/}
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="username">
                        用户<input type="text" value={this.state.username} id="username" name="username"
                                   onChange={e => this.handleChange(e)}/>
                    </label>

                    <select name="fruits" id="" value={this.state.fruit}
                            onChange={e => this.handleChange(e)}>
                        <option value="apple">苹果</option>
                        <option value="banana">香蕉</option>
                        <option value="orange">橘子</option>
                    </select>


                    <label htmlFor="username">
                        <input type='submit' value="提交"/>
                    </label>
                </form>
            </div>
        );
    }

    handleChangeUserName(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({username: e.target.value})
    }

    handleSelectFruit(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({fruit: e.target.value})

    }

    handleChange(e: React.ChangeEvent<any>) {
        // 计算属性名
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e: React.FormEvent) {
        // 取消默认行为
        e.preventDefault()
        console.error(this.state)
    }
}

export default App;
