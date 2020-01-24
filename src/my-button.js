import {html, css} from
  'https://unpkg.com/lit-element/lit-element.js?module';
import MyProperties from './properties.js';
import styles from "./button-css.js";

class MyButton extends MyProperties {

  mood() {
    return this.happy ? console.log('Today is a good day!')
      : this.sad ? console.log('Today is a sad sad day!')
      : console.log('There is no mood.');
  }

  static get styles() {
    return css`
      ${styles}
    `;
  }

  render() {
    return html`
      <button @click="${this.mood}">
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('my-button', MyButton);
