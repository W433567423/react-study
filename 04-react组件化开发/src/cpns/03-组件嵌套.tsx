import {Component} from 'react'
import Header from "./03-cpns/Header";
import Main from "./03-cpns/Main";
import Footer from "./03-cpns/Footer";

export default class App extends Component {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}
