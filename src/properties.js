import {LitElement} from
  'https://unpkg.com/lit-element/lit-element.js?module';

export default class MyProperties  extends LitElement {

  static get properties() {
    return {
      happy: { type: Boolean },
      sad: { type: Boolean }
    }
  }
}
