import { createElement, Component, render } from './toy-react'


class MyComponent extends Component {
    constructor() {
        super()
        this.state = {
            a: '1'
        }
    }
    render() {
        return <div>
            <h1>第一个组件</h1>
            {this.state.a}
            {this.children}
        </div>
    }
}


render(<MyComponent id="oneDiv" class="a">
    <div>1222</div>
    <div></div>
    <div></div>
</MyComponent>, document.body)