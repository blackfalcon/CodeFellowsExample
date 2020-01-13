import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';

export default class MyMood extends LitElement {

  static get properties() {
    return {
      mood: { type: String }
    }
  }

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
    span {
        text-decoration: underline;
        font-weight: bold;
        color: #222;
      }
    `;
  }

  render() {
    return html`
      Today I am feeling especially <span>${this.mood}</span>!
      <slot></slot>
    `;
  }

}

customElements.define('my-mood', MyMood);
