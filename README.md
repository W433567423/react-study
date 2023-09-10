#### React 开发依赖

- 开发 React 必须依赖的库
    - react:包含 react 所必须的源码
    - react-dom:react 渲染在不同平台所需要的核心代码(0.14 后拆分)
    - babel:将 jsx 转换成 React 代码的工具

## 虚拟 DOM

- React.createElement 最终创建出来一个 ReactElement 对象，利用 ReactElement 对象组成 JavaScript 的对象树（虚拟 DOM）
- React.render 函数将虚拟 DOM 转换成真实 DOM

## 前端工程化>(脚手架)

要考虑以下几个要素

- 目录结构怎么划分
- 如何管理文件之间的相互依赖
- 如何管理第三方模块的依赖
- 项目发布前如何打包压缩
- 等等...

## React 目录结构

![img.png](https://tutu-1313352375.cos.ap-nanjing.myqcloud.com/my/directory-structure.png)

- PWA 提供安装和离线等功能(Web APP)

## 组件化开发

#### 类组件

- 名称必须大写
- 继承自 React.Component
- 实现 render 函数

#### 函数式组件

- 没有 this 对象
- 没有内部状态(hooks 解决)
- 没有生命周期
- 返回的类型为 React 元素/数组或 fragments/Portals/字符串或数字/布尔值或null

### 生命周期

![img.png](https://tutu-1313352375.cos.ap-nanjing.myqcloud.com/my/life-cycle.png)

- mounting周期
    1. constructor函数
        - 初始化state
        - 为事件绑定实例

    2. render函数
    3. componentDidMount函数
        - 进行依赖与DOM的操作
        - 发送网络请求
        - 添加订阅

- updating周期
    1. render函数
    2. componentDidUpdate函数
        - 对DOM进行操作
        - 比较props，进行操作(eg:网络请求)

- Unmounting周期
    1. componentWillUnmount函数
        - 取消订阅
        - 取消网络请求
        - 清楚timer

- 不常用的生命周期
  ![img.png](https://tutu-1313352375.cos.ap-nanjing.myqcloud.com/my/life-cycle-all.png)
    - shouldComponentUpdate

### 通信

#### 组件之间的

##### 父->子

- 通过自定义属性
  > 1. 可以定义属性left-slot、right-slot传递React元素以实现vue插槽
  > 2. 通过{...props}进行子孙节点通信

##### 子->父

- 通过自定义属性(传递一个函数)

#### 跨组件通信

##### React.Context(淘汰)

```react
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
```

##### Redux[未完成]

##### Hooks[未完成]

#### 类型校验

- PropTypes

#### setState

- [在生命周期里]this.setState()是异步的

  - 显著提升性能
  - 让state和props保持一致

  > 在setTimeout、原生DOM事件等情况下是同步的

- 使用this.setState()时需要不可变

  > 对对象类型进行深拷贝

#### React更新机制

![img.png](https://tutu-1313352375.cos.ap-nanjing.myqcloud.com/my/render-pipeline.png)

![img.png](https://tutu-1313352375.cos.ap-nanjing.myqcloud.com/my/update-pipeline.png)

### 受控组件

1. 受控组件通过`props`获取其当前值，并通过回调函数(比如`onChange`)通知变化
2. 表单状态发生变化时，都会通知`React`，将状态交给`React`进行处理，比如可以使用`useState`存储
3. 受控组件中，组件渲染出的状态与它的`value`或`checked`属性相对应
4. 受控组件会更新`state`的流程

### 高阶组件

react高阶组件并不是react API的一部分，它是基于React的组合特性而形成的设计模式

- comPonent.display='定义组件名'

- 可以通过`<cpn {...this.props} />`或`<cpn {props} />`传递给内部组件

- 高阶组件可以用来增强props、渲染判断鉴权、生命周期劫持、反向继承(不推荐)、ref转发(forwardRef())等

  > react推荐进行组合，而不是继承

### portals

- 将一些东西渲染到指定元素(eg:modal组件)

### fragments

- 和template(vue),block(小程序)类似，不渲染的节点
- 短语法：`<Fragment></Fragment>`有时可以简写为`<></>`

> 使用短语法时不能添加任何属性

## 事件总线event

```react
import {PureComponent} from 'react';
import {EventEmitter} from "events";


const eventBus = new EventEmitter()

class App extends PureComponent {
    render() {
        return (
            <div>
                App
                <Child1/>
            </div>
        );
    }

    componentDidMount() {
        eventBus.on('clickButton', this.log)
    }

    componentWillUnmount() {
        eventBus.off('clickButton', this.log)
        // eventBus.off('clickButton') 
    }

    log(e) {
        console.log('破案',e)
    }
}


class Child1 extends PureComponent {
    render() {
        return (
            <div>
                Child1
                <Child2/>
            </div>
        );
    }
}

class Child2 extends PureComponent {
    render() {
        return (
            <div>
                Child2
                <Child3/>
            </div>
        );
    }
}

class Child3 extends PureComponent {
    render() {
        return (
            <div>
                Child3
                <button onClick={() => this.sendMsg()}>点击</button>
            </div>
        );
    }


    sendMsg() {
        console.log('发送事件')
        eventBus.emit('clickButton', 'hallo world')
    }

}

export default App;
```

> eventEmitter().on('enventName',()=>{})必须搭配eventEmitter().off('enventName',()=>{})使用，不然会触发两次,可能与react机制有所关联

## Ref

react一般不需要、也不建议直接操作DOM,特殊情况下可以使用ref,如

- 管理焦点、文本选择、媒体播放
- 触发强制动画
- 集成第三方DOM库

创建refs的三种方法

- 字符串ref(不推荐)

  ```react
  render(){return<p ref='pRef'></p>}
  // 通过this.refs.pRef拿到该DOM元素
  ```

- 对象ref(推荐)

  ```react
  constructor(){
      this.pRef=creatRef()
  }
  render(){return<p ref={this.pRef}></p>}
  
  // 通过this.pRef拿到该DOM元素
  ```

- 回调函数ref

  ```react
  constructor(){
      this.pRef=null
  }
  render(){return<p ref={(args)=>this.pRef=args}></p>}
  ```

## StrictMode

- 不安全的生命周期
- 过时的ref API
- 检查意外的副作用
- 使用废弃的findDOMNode方法
- 检查过期的context API

## React-CSS

- 内联CSS
- 普通css
- css module
- styled-components库(All in js)
- classnames库

## Redux

- 三大原则

  - 单一数据源
  - state只读(通过action进行修改)
  - 编写纯函数

- 流程图

  ![redux.gif](https://cn.redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)
