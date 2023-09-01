import {Component} from 'react'
import ChildClass from "./ChildClass";
import ChildFunction from "./ChildFunction";

export default class Main extends Component {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <h2>this is Main</h2>
                <ChildClass f={this.f} name='tutu'/>
                <ChildFunction name='tutu'/>
            </div>
        )
    }

    f() {
        console.log(1)
    }
}
