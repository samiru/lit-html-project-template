import { html, render } from 'lit-html/lit-html.js';

const message = () => {
  return html `
    <p>Well, well, well</p>
  `;
};

const el = document.querySelector('#container');

render(message(), el);