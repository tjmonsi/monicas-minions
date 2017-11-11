import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';
import './index.html';

class Page extends Element {
  static get is () { return 'not-found-page'; }
}

!customElements.get(Page.is)
  ? customElements.define(Page.is, Page)
  : console.warn(`${Page.is} is already defined`);
