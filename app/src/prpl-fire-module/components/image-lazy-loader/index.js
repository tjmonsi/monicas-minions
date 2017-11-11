import { Element } from '@polymer/polymer/polymer-element';
import { customElements } from 'global/window';
import './index.html';

const getTransitionEvent = (el) => {
    const transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'Transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
    };

    for (var t in transitions) {
        if (el.style[t] !== undefined) {
            return transitions[t];
        }
    }
};

class Component extends Element {
  static get is () { return 'image-lazy-loader'; }

  static get properties () {
    return {
      src: {
        type: String,
        observer: '_loadImage'
      }
    };
  }

  _loadImage (img) {
    const thumbnailImage = this.querySelector('img');
    const image = document.createElement('img');
    const transition = getTransitionEvent(thumbnailImage);

    const fn = () => {
      thumbnailImage.removeEventListener(transition, fn);
      this.removeChild(thumbnailImage);
    };

    thumbnailImage.addEventListener(transition, fn);

    image.src = img;
    image.onload = () => {
      this.appendChild(image);
      thumbnailImage.classList.add('hidden');
    };
  }
}

!customElements.get(Component.is)
  ? customElements.define(Component.is, Component)
  : console.warn(`${Component.is} is already defined`);
