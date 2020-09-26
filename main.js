import { createElement, Component, render } from './toy-react'


class MyComponent extends Component {
    constructor() {
        super()
        this.state = {
            a: 1
        }
    }
    render() {
        return <div>
            <h1>第一个组件</h1>
            <button onClick={() => { this.setState({a: this.state.a + 1}) }}>add</button>
            {this.state.a.toString()}
        </div>
    }
}


render(<MyComponent id="oneDiv" class="a">
    <div>1222</div>
    <div></div>
    <div></div>
</MyComponent>, document.body)