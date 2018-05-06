import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _5f70526a = () => import('../pages/skateboards.vue' /* webpackChunkName: "pages/skateboards" */).then(m => m.default || m)
const _29ab9eb1 = () => import('../pages/cartoons.vue' /* webpackChunkName: "pages/cartoons" */).then(m => m.default || m)
const _2589e727 = () => import('../pages/art.vue' /* webpackChunkName: "pages/art" */).then(m => m.default || m)
const _491624b6 = () => import('../pages/artServices.vue' /* webpackChunkName: "pages/artServices" */).then(m => m.default || m)
const _a3ac704e = () => import('../pages/dev.vue' /* webpackChunkName: "pages/dev" */).then(m => m.default || m)
const _4400a60a = () => import('../pages/murals.vue' /* webpackChunkName: "pages/murals" */).then(m => m.default || m)
const _0682e9d4 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/skateboards",
			component: _5f70526a,
			name: "skateboards"
		},
		{
			path: "/cartoons",
			component: _29ab9eb1,
			name: "cartoons"
		},
		{
			path: "/art",
			component: _2589e727,
			name: "art"
		},
		{
			path: "/artServices",
			component: _491624b6,
			name: "artServices"
		},
		{
			path: "/dev",
			component: _a3ac704e,
			name: "dev"
		},
		{
			path: "/murals",
			component: _4400a60a,
			name: "murals"
		},
		{
			path: "/",
			component: _0682e9d4,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
