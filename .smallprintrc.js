module.exports = {
  "source": {
    "config": "config/default.json",
    "html": {
      "index": "src/core/index.ejs",
      "404": "src/core/index.ejs"
    },
    "js": {
      "main": "src/core/index.js",
      "es5": "src/core/polyfills/es5.js",
      "es6": "src/core/polyfills/es6.js",
      "promise": "src/core/polyfills/promise.js",
      "shady": "src/core/polyfills/shadycss.js"
    }
  }
}