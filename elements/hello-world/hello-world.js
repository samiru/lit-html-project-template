import { LitElement, html } from '@polymer/lit-element/lit-element.js';

class HelloWorld extends LitElement {
    render() {
        return html `
            <h1>Hello World!</h1>
        `;
    }
}

customElements.define('hello-world', HelloWorld);