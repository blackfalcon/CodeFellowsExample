import {html, css} from
  'https://unpkg.com/lit-element/lit-element.js?module';
import MyProperties from './properties.js';
import './my-button.js';

class MyElement extends MyProperties {

  static get styles() {
    return css`
      :host {
        display: block; font-family: sans-serif; font-size: 6rem;
        color: #787878; text-align: center; margin: 4rem 0;
      }

      :host([happy]) { color: gold }
      :host([sad]) { color: steelblue}
    `;
  }

  render() {
    return html`
      <slot></slot>
      <my-button ?happy="${this.happy}" ?sad="${this.sad}">
        <slot name="button"></slot>
      </my-button>
    `;
  }
}

customElements.define('my-element', MyElement);
