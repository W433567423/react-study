import React, {PureComponent} from 'react';
import './style.css'

class App
    extends PureComponent {
    render() {
        return (
            <div>
                <p style={{color: "red", fontSize: "20px", fontWeight: '600'}}>内联样式</p>
                <p className="app-style">css文件</p>
            </div>
        );
    }
}


export default App;
