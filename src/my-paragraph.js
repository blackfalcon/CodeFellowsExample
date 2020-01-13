import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';

class MyParagraph extends LitElement {

  static get styles() {
    return css`
    :host {
      display: block;
      font-family: sans-serif;
      font-size: 3rem;
      color: #999;
      text-align: center;
      margin: 4rem 0;
    }
    `;
  }

  render() {
    return html`
      <slot name="internal"></slot>
      <slot name="external"></slot>
    `;
  }

}

customElements.define('my-paragraph', MyParagraph);
