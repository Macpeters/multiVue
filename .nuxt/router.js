import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _491624b6 = () => import('../pages/artServices.vue' /* webpackChunkName: "pages/artServices" */).then(m => m.default || m)
const _02a8f70d = () => import('../pages/webDev.vue' /* webpackChunkName: "pages/webDev" */).then(m => m.default || m)
const _2589e727 = () => import('../pages/art.vue' /* webpackChunkName: "pages/art" */).then(m => m.default || m)
const _5f70526a = () => import('../pages/skateboards.vue' /* webpackChunkName: "pages/skateboards" */).then(m => m.default || m)
const _3ab0d8e6 = () => import('../pages/devResume.vue' /* webpackChunkName: "pages/devResume" */).then(m => m.default || m)
const _9eadd9e4 = () => import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */).then(m => m.default || m)
const _0aaf5e8e = () => import('../pages/tarot.vue' /* webpackChunkName: "pages/tarot" */).then(m => m.default || m)
const _e628fd10 = () => import('../pages/aboutArtist.vue' /* webpackChunkName: "pages/aboutArtist" */).then(m => m.default || m)
const _0b226987 = () => import('../pages/gameDev.vue' /* webpackChunkName: "pages/gameDev" */).then(m => m.default || m)
const _4400a60a = () => import('../pages/murals.vue' /* webpackChunkName: "pages/murals" */).then(m => m.default || m)
const _29ab9eb1 = () => import('../pages/cartoons.vue' /* webpackChunkName: "pages/cartoons" */).then(m => m.default || m)
const _14734ff7 = () => import('../pages/blogPosts/whatIlearnedFromDrawingChallenge.vue' /* webpackChunkName: "pages/blogPosts/whatIlearnedFromDrawingChallenge" */).then(m => m.default || m)
const _dd9ffb3c = () => import('../pages/blogPosts/howToPracticeDrawing.vue' /* webpackChunkName: "pages/blogPosts/howToPracticeDrawing" */).then(m => m.default || m)
const _efd4dad2 = () => import('../pages/blogPosts/howToFailAtKickstarter.vue' /* webpackChunkName: "pages/blogPosts/howToFailAtKickstarter" */).then(m => m.default || m)
const _c08a2c20 = () => import('../pages/blogPosts/photographingBlacklightArt.vue' /* webpackChunkName: "pages/blogPosts/photographingBlacklightArt" */).then(m => m.default || m)
const _7faacf40 = () => import('../pages/blogPosts/processOfAMural.vue' /* webpackChunkName: "pages/blogPosts/processOfAMural" */).then(m => m.default || m)
const _bd58220c = () => import('../pages/blogPosts/tarotAndPursuitOfBetter.vue' /* webpackChunkName: "pages/blogPosts/tarotAndPursuitOfBetter" */).then(m => m.default || m)
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
			path: "/artServices",
			component: _491624b6,
			name: "artServices"
		},
		{
			path: "/webDev",
			component: _02a8f70d,
			name: "webDev"
		},
		{
			path: "/art",
			component: _2589e727,
			name: "art"
		},
		{
			path: "/skateboards",
			component: _5f70526a,
			name: "skateboards"
		},
		{
			path: "/devResume",
			component: _3ab0d8e6,
			name: "devResume"
		},
		{
			path: "/blog",
			component: _9eadd9e4,
			name: "blog"
		},
		{
			path: "/tarot",
			component: _0aaf5e8e,
			name: "tarot"
		},
		{
			path: "/aboutArtist",
			component: _e628fd10,
			name: "aboutArtist"
		},
		{
			path: "/gameDev",
			component: _0b226987,
			name: "gameDev"
		},
		{
			path: "/murals",
			component: _4400a60a,
			name: "murals"
		},
		{
			path: "/cartoons",
			component: _29ab9eb1,
			name: "cartoons"
		},
		{
			path: "/blogPosts/whatIlearnedFromDrawingChallenge",
			component: _14734ff7,
			name: "blogPosts-whatIlearnedFromDrawingChallenge"
		},
		{
			path: "/blogPosts/howToPracticeDrawing",
			component: _dd9ffb3c,
			name: "blogPosts-howToPracticeDrawing"
		},
		{
			path: "/blogPosts/howToFailAtKickstarter",
			component: _efd4dad2,
			name: "blogPosts-howToFailAtKickstarter"
		},
		{
			path: "/blogPosts/photographingBlacklightArt",
			component: _c08a2c20,
			name: "blogPosts-photographingBlacklightArt"
		},
		{
			path: "/blogPosts/processOfAMural",
			component: _7faacf40,
			name: "blogPosts-processOfAMural"
		},
		{
			path: "/blogPosts/tarotAndPursuitOfBetter",
			component: _bd58220c,
			name: "blogPosts-tarotAndPursuitOfBetter"
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
