import {html} from 'https://unpkg.com/lit-element/lit-element.js?module';
import MyMood from './my-mood.js';

class MoodAdv extends MyMood {

  render() {
    return html`
      <slot name="string"></slot> <span>${this.mood}</span>!
      <slot name="external"></slot>
    `;
  }

}

customElements.define('mood-adv', MoodAdv);
