import { createElement, Component, render } from './toy-react'


class MyComponent extends Component {
    render() {
        return <div>
            <h1>第一个组件</h1>
            {this.children}
        </div>
    }
}


render(<MyComponent id="oneDiv" class="a">
    <div>1222</div>
    <div></div>
    <div></div>
</MyComponent>, document.body)