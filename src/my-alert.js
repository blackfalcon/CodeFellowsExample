import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';

class MyAlert extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        font-family: sans-serif;
        text-align: center;
        margin: 40px 0;
      }
      button {
        background-color: blue;
        padding: 0 1em;
        line-height: 2;
        border-radius: 5px;
        font-size: 3rem;
        color: #fff;
      }
      button:hover {
        cursor: hand;
      }
    `;
  }

  alert(e){
    console.log(e.target);
  }

  render() {
    return html`
      <button @click="${this.alert}">
      <slot name="internal"></slot>
      </button>

      <slot name="external"></slot>
    `;
  }

}

customElements.define('my-alert', MyAlert);
