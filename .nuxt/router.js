import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _a585c86a = () => import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */).then(m => m.default || m)
const _2a5dc48a = () => import('../pages/webDev.vue' /* webpackChunkName: "pages/webDev" */).then(m => m.default || m)
const _c13285ae = () => import('../pages/uvArt.vue' /* webpackChunkName: "pages/uvArt" */).then(m => m.default || m)
const _6bb57387 = () => import('../pages/murals.vue' /* webpackChunkName: "pages/murals" */).then(m => m.default || m)
const _8706cbca = () => import('../pages/aboutArtist.vue' /* webpackChunkName: "pages/aboutArtist" */).then(m => m.default || m)
const _004e2124 = () => import('../pages/skateboards.vue' /* webpackChunkName: "pages/skateboards" */).then(m => m.default || m)
const _bec7251e = () => import('../pages/tarot.vue' /* webpackChunkName: "pages/tarot" */).then(m => m.default || m)
const _0b060648 = () => import('../pages/artServices.vue' /* webpackChunkName: "pages/artServices" */).then(m => m.default || m)
const _4bf168ac = () => import('../pages/gameDev.vue' /* webpackChunkName: "pages/gameDev" */).then(m => m.default || m)
const _376300ee = () => import('../pages/cartoons.vue' /* webpackChunkName: "pages/cartoons" */).then(m => m.default || m)
const _07b95a6c = () => import('../pages/art.vue' /* webpackChunkName: "pages/art" */).then(m => m.default || m)
const _3834836e = () => import('../pages/devResume.vue' /* webpackChunkName: "pages/devResume" */).then(m => m.default || m)
const _1b1682a6 = () => import('../pages/blogPosts/photographingBlacklightArt.vue' /* webpackChunkName: "pages/blogPosts/photographingBlacklightArt" */).then(m => m.default || m)
const _6f77e2f4 = () => import('../pages/blogPosts/whatIlearnedFromDrawingChallenge.vue' /* webpackChunkName: "pages/blogPosts/whatIlearnedFromDrawingChallenge" */).then(m => m.default || m)
const _b2b3507a = () => import('../pages/blogPosts/processOfAMural.vue' /* webpackChunkName: "pages/blogPosts/processOfAMural" */).then(m => m.default || m)
const _721311e3 = () => import('../pages/blogPosts/repurcussionsOfDDOSAttack.vue' /* webpackChunkName: "pages/blogPosts/repurcussionsOfDDOSAttack" */).then(m => m.default || m)
const _162368df = () => import('../pages/blogPosts/howToPracticeDrawing.vue' /* webpackChunkName: "pages/blogPosts/howToPracticeDrawing" */).then(m => m.default || m)
const _67d0a8ee = () => import('../pages/blogPosts/isFacebookTheEnemy.vue' /* webpackChunkName: "pages/blogPosts/isFacebookTheEnemy" */).then(m => m.default || m)
const _c46d6458 = () => import('../pages/blogPosts/howToFailAtKickstarter.vue' /* webpackChunkName: "pages/blogPosts/howToFailAtKickstarter" */).then(m => m.default || m)
const _42179b5d = () => import('../pages/blogPosts/tarotAndPursuitOfBetter.vue' /* webpackChunkName: "pages/blogPosts/tarotAndPursuitOfBetter" */).then(m => m.default || m)
const _daa8cc0e = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			path: "/blog",
			component: _a585c86a,
			name: "blog"
		},
		{
			path: "/webDev",
			component: _2a5dc48a,
			name: "webDev"
		},
		{
			path: "/uvArt",
			component: _c13285ae,
			name: "uvArt"
		},
		{
			path: "/murals",
			component: _6bb57387,
			name: "murals"
		},
		{
			path: "/aboutArtist",
			component: _8706cbca,
			name: "aboutArtist"
		},
		{
			path: "/skateboards",
			component: _004e2124,
			name: "skateboards"
		},
		{
			path: "/tarot",
			component: _bec7251e,
			name: "tarot"
		},
		{
			path: "/artServices",
			component: _0b060648,
			name: "artServices"
		},
		{
			path: "/gameDev",
			component: _4bf168ac,
			name: "gameDev"
		},
		{
			path: "/cartoons",
			component: _376300ee,
			name: "cartoons"
		},
		{
			path: "/art",
			component: _07b95a6c,
			name: "art"
		},
		{
			path: "/devResume",
			component: _3834836e,
			name: "devResume"
		},
		{
			path: "/blogPosts/photographingBlacklightArt",
			component: _1b1682a6,
			name: "blogPosts-photographingBlacklightArt"
		},
		{
			path: "/blogPosts/whatIlearnedFromDrawingChallenge",
			component: _6f77e2f4,
			name: "blogPosts-whatIlearnedFromDrawingChallenge"
		},
		{
			path: "/blogPosts/processOfAMural",
			component: _b2b3507a,
			name: "blogPosts-processOfAMural"
		},
		{
			path: "/blogPosts/repurcussionsOfDDOSAttack",
			component: _721311e3,
			name: "blogPosts-repurcussionsOfDDOSAttack"
		},
		{
			path: "/blogPosts/howToPracticeDrawing",
			component: _162368df,
			name: "blogPosts-howToPracticeDrawing"
		},
		{
			path: "/blogPosts/isFacebookTheEnemy",
			component: _67d0a8ee,
			name: "blogPosts-isFacebookTheEnemy"
		},
		{
			path: "/blogPosts/howToFailAtKickstarter",
			component: _c46d6458,
			name: "blogPosts-howToFailAtKickstarter"
		},
		{
			path: "/blogPosts/tarotAndPursuitOfBetter",
			component: _42179b5d,
			name: "blogPosts-tarotAndPursuitOfBetter"
		},
		{
			path: "/",
			component: _daa8cc0e,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
