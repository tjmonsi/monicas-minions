import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';
import './index.html';

class Component extends Element {
  static get is () { return 'fire-article'; }

  static get properties () {
    return {
      article: {
        type: Object
      }
    };
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
