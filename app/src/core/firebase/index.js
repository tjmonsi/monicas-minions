
const configs = [];
import(/* webpackChunkName: 'firebase' */ 'firebase').then(firebase => {
  configs.forEach(config => {
    if (config.name) {
      firebase.initializeApp(config, name);
    } else {
      firebase.initializeApp(config);
    }
  });
  window.dispatchEvent(new window.CustomEvent('firebase-initialized', { detail: firebase }));
})
  