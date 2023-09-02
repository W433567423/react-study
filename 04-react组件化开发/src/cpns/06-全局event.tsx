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
        // eventBus.on('clickButton', (args) => {
        //     console.log('监听到了事件', args)
        // })
        eventBus.on('clickButton', this.log)
    }

    componentWillUnmount() {
        eventBus.off('clickButton', this.log)
        // eventBus.off('clickButton')
    }

    log(e: any) {
        console.log('破案', e)
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
