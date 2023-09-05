import React, {PureComponent} from 'react';
import {createPortal} from "react-dom";

class Modal extends PureComponent<any, any> {
    render() {
        return createPortal(this.props.children, document.querySelector('#modal') as Element)
    }
}

class Home extends PureComponent {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <Modal>
                    <h2>Title</h2>
                </Modal>
            </div>
        )
    }
}

class App
    extends PureComponent {
    render() {
        return (
            <Home/>
        );
    }
}

export default App;
