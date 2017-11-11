
export default {
  'landing-page': () => { return import(/* webpackChunkName: "landing-page" */ 'prpl-fire-module/pages/landing-page') }, 
'not-found-page': () => { return import(/* webpackChunkName: "not-found-page" */ 'prpl-fire-module/pages/not-found-page') }
}
  