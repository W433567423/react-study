import React, {Component} from 'react';
import styled from "styled-components";


const Header = styled.div`
  width: 100%;
  height: 200px;
  background: red
`


class App extends Component {

    render() {
        /*
        * 特点:
        * 1、props穿透
        * 2、attrs的使用
        * 3、传入state作为props属性
        * */
        // return (
        //     <div>
        //         <h2>All In Js</h2>
        //         {/* 标签模板字符串
        //         第一个返回值是被${} 分割的数组
        //         第二-N个返回值是${}
        //         */}
        //         {/*{this.temF`my name is ${this.state.name},age is ${this.state.age}`}*/}
        //     </div>
        // )
        return (<Header/>)
    }

    // temF(...args: any[]) {
    //     console.log(args)
    //     return (<div>temF</div>)
    // }
}

export default App;
