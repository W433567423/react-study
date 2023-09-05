import React, {PureComponent} from 'react';
import style from './style.module.css'

class App extends PureComponent {
    render() {
        return (
            <div>
                <div className={style.title}>module css</div>
            </div>
        );
    }
}

export default App;
