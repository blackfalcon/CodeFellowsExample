import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';

class TheDescription extends LitElement {

  static get styles() {
    return css`
    :host {
      display: block;
      font-family: sans-serif;
      font-size: 1rem;
      color: #222;
      text-align: center;
      margin: 1rem 10rem 3rem;
      line-height: 1.5;
    }
    `;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

}

customElements.define('the-description', TheDescription);
