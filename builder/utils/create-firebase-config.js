const getConfig = require('./get-config');

module.exports = () => {
  const config = getConfig();

  return `
const configs = ${JSON.stringify(config.build.firebaseConfig)};
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
  `;
};
