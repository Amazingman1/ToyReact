const RENDER_TO_DOM = Symbol('render to dom')

class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type)
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value)
    }
    appendChild(component) {
        this.root.appendChild(component.root)
    }
    [RENDER_TO_DOM](range) {
        this.render().[RENDER_TO_DOM](range)
    }
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content)
    }
    [RENDER_TO_DOM](range) {
        this.render().[RENDER_TO_DOM](range)
    }
}
export class Component {
    constructor() {
        this.props = Object.create(null)
        this.children = []
    }
    setAttribute(name, value) {
        this.props[name] = value
    }
    appendChild(component) {
        console.log(component, 999)
        this.children.push(component)
    }
    [RENDER_TO_DOM](range) {
        this.render()[RENDER_TO_DOM](range)
    }
}

export function createElement(type, attributes, ...children) {
    let e
    if(typeof type === 'string') {
        e = new ElementWrapper(type)
    } else {
        e = new type
    }

    for (let p in attributes) {
        e.setAttribute(p, attributes[p])
    }
    let insertChildren = (children) => {
        for (let child of children) {
            if(typeof child === 'string') {
                child =new TextWrapper(child)
            }
            if (typeof child === 'object' && child instanceof Array) {
                insertChildren(child)
            } else {
                e.appendChild(child)
            }
        
        }
    }
    insertChildren(children)
    return e;
}

export function render(component, parentElement) {
    let range = document.createRange()
    range.setStart(parentElement, 0)
    range.setEnd(parentElement, parentElement.childNodes.length)
    range.deleteContents()
    component.render()[RENDER_TO_DOM](range)

}
