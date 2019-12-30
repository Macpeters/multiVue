import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _05bf972c = () => interopDefault(import('../pages/art/index.vue' /* webpackChunkName: "pages/art/index" */))
const _9eadd9e4 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _3ab0d8e6 = () => interopDefault(import('../pages/devResume.vue' /* webpackChunkName: "pages/devResume" */))
const _0aaf5e8e = () => interopDefault(import('../pages/tarot.vue' /* webpackChunkName: "pages/tarot" */))
const _5935dbcc = () => interopDefault(import('../pages/art/aboutArtist.vue' /* webpackChunkName: "pages/art/aboutArtist" */))
const _316d0610 = () => interopDefault(import('../pages/art/alphabets.vue' /* webpackChunkName: "pages/art/alphabets" */))
const _e2b8f646 = () => interopDefault(import('../pages/art/cartoons.vue' /* webpackChunkName: "pages/art/cartoons" */))
const _7736671b = () => interopDefault(import('../pages/art/cattoons.vue' /* webpackChunkName: "pages/art/cattoons" */))
const _4c084388 = () => interopDefault(import('../pages/art/copyToons.vue' /* webpackChunkName: "pages/art/copyToons" */))
const _11117b94 = () => interopDefault(import('../pages/art/digitalPainting.vue' /* webpackChunkName: "pages/art/digitalPainting" */))
const _33db7d8d = () => interopDefault(import('../pages/art/draw9.vue' /* webpackChunkName: "pages/art/draw9" */))
const _da6b1b3e = () => interopDefault(import('../pages/art/fineArt.vue' /* webpackChunkName: "pages/art/fineArt" */))
const _4c646662 = () => interopDefault(import('../pages/art/fineArtUv.vue' /* webpackChunkName: "pages/art/fineArtUv" */))
const _4fd42736 = () => interopDefault(import('../pages/art/murals.vue' /* webpackChunkName: "pages/art/murals" */))
const _e727dc14 = () => interopDefault(import('../pages/art/services.vue' /* webpackChunkName: "pages/art/services" */))
const _c6db9dc2 = () => interopDefault(import('../pages/art/skateboards.vue' /* webpackChunkName: "pages/art/skateboards" */))
const _0e2a12a6 = () => interopDefault(import('../pages/art/thatRatBastard.vue' /* webpackChunkName: "pages/art/thatRatBastard" */))
const _77e6f175 = () => interopDefault(import('../pages/blogPosts/activeRecordQueries.vue' /* webpackChunkName: "pages/blogPosts/activeRecordQueries" */))
const _2408cb10 = () => interopDefault(import('../pages/blogPosts/aLookBack2016.vue' /* webpackChunkName: "pages/blogPosts/aLookBack2016" */))
const _2416e291 = () => interopDefault(import('../pages/blogPosts/aLookBack2017.vue' /* webpackChunkName: "pages/blogPosts/aLookBack2017" */))
const _2424fa12 = () => interopDefault(import('../pages/blogPosts/aLookBack2018.vue' /* webpackChunkName: "pages/blogPosts/aLookBack2018" */))
const _24331193 = () => interopDefault(import('../pages/blogPosts/aLookBack2019.vue' /* webpackChunkName: "pages/blogPosts/aLookBack2019" */))
const _efd4dad2 = () => interopDefault(import('../pages/blogPosts/howToFailAtKickstarter.vue' /* webpackChunkName: "pages/blogPosts/howToFailAtKickstarter" */))
const _dd9ffb3c = () => interopDefault(import('../pages/blogPosts/howToPracticeDrawing.vue' /* webpackChunkName: "pages/blogPosts/howToPracticeDrawing" */))
const _65a8719e = () => interopDefault(import('../pages/blogPosts/isFacebookTheEnemy.vue' /* webpackChunkName: "pages/blogPosts/isFacebookTheEnemy" */))
const _c08a2c20 = () => interopDefault(import('../pages/blogPosts/photographingBlacklightArt.vue' /* webpackChunkName: "pages/blogPosts/photographingBlacklightArt" */))
const _7faacf40 = () => interopDefault(import('../pages/blogPosts/processOfAMural.vue' /* webpackChunkName: "pages/blogPosts/processOfAMural" */))
const _18ee1b80 = () => interopDefault(import('../pages/blogPosts/repurcussionsOfDDOSAttack.vue' /* webpackChunkName: "pages/blogPosts/repurcussionsOfDDOSAttack" */))
const _bd58220c = () => interopDefault(import('../pages/blogPosts/tarotAndPursuitOfBetter.vue' /* webpackChunkName: "pages/blogPosts/tarotAndPursuitOfBetter" */))
const _10c21b23 = () => interopDefault(import('../pages/blogPosts/teePublic.vue' /* webpackChunkName: "pages/blogPosts/teePublic" */))
const _14734ff7 = () => interopDefault(import('../pages/blogPosts/whatIlearnedFromDrawingChallenge.vue' /* webpackChunkName: "pages/blogPosts/whatIlearnedFromDrawingChallenge" */))
const _b25c6972 = () => interopDefault(import('../pages/dev/webDev.vue' /* webpackChunkName: "pages/dev/webDev" */))
const _0682e9d4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
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

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/art",
      component: _05bf972c,
      name: "art"
    }, {
      path: "/blog",
      component: _9eadd9e4,
      name: "blog"
    }, {
      path: "/devResume",
      component: _3ab0d8e6,
      name: "devResume"
    }, {
      path: "/tarot",
      component: _0aaf5e8e,
      name: "tarot"
    }, {
      path: "/art/aboutArtist",
      component: _5935dbcc,
      name: "art-aboutArtist"
    }, {
      path: "/art/alphabets",
      component: _316d0610,
      name: "art-alphabets"
    }, {
      path: "/art/cartoons",
      component: _e2b8f646,
      name: "art-cartoons"
    }, {
      path: "/art/cattoons",
      component: _7736671b,
      name: "art-cattoons"
    }, {
      path: "/art/copyToons",
      component: _4c084388,
      name: "art-copyToons"
    }, {
      path: "/art/digitalPainting",
      component: _11117b94,
      name: "art-digitalPainting"
    }, {
      path: "/art/draw9",
      component: _33db7d8d,
      name: "art-draw9"
    }, {
      path: "/art/fineArt",
      component: _da6b1b3e,
      name: "art-fineArt"
    }, {
      path: "/art/fineArtUv",
      component: _4c646662,
      name: "art-fineArtUv"
    }, {
      path: "/art/murals",
      component: _4fd42736,
      name: "art-murals"
    }, {
      path: "/art/services",
      component: _e727dc14,
      name: "art-services"
    }, {
      path: "/art/skateboards",
      component: _c6db9dc2,
      name: "art-skateboards"
    }, {
      path: "/art/thatRatBastard",
      component: _0e2a12a6,
      name: "art-thatRatBastard"
    }, {
      path: "/blogPosts/activeRecordQueries",
      component: _77e6f175,
      name: "blogPosts-activeRecordQueries"
    }, {
      path: "/blogPosts/aLookBack2016",
      component: _2408cb10,
      name: "blogPosts-aLookBack2016"
    }, {
      path: "/blogPosts/aLookBack2017",
      component: _2416e291,
      name: "blogPosts-aLookBack2017"
    }, {
      path: "/blogPosts/aLookBack2018",
      component: _2424fa12,
      name: "blogPosts-aLookBack2018"
    }, {
      path: "/blogPosts/aLookBack2019",
      component: _24331193,
      name: "blogPosts-aLookBack2019"
    }, {
      path: "/blogPosts/howToFailAtKickstarter",
      component: _efd4dad2,
      name: "blogPosts-howToFailAtKickstarter"
    }, {
      path: "/blogPosts/howToPracticeDrawing",
      component: _dd9ffb3c,
      name: "blogPosts-howToPracticeDrawing"
    }, {
      path: "/blogPosts/isFacebookTheEnemy",
      component: _65a8719e,
      name: "blogPosts-isFacebookTheEnemy"
    }, {
      path: "/blogPosts/photographingBlacklightArt",
      component: _c08a2c20,
      name: "blogPosts-photographingBlacklightArt"
    }, {
      path: "/blogPosts/processOfAMural",
      component: _7faacf40,
      name: "blogPosts-processOfAMural"
    }, {
      path: "/blogPosts/repurcussionsOfDDOSAttack",
      component: _18ee1b80,
      name: "blogPosts-repurcussionsOfDDOSAttack"
    }, {
      path: "/blogPosts/tarotAndPursuitOfBetter",
      component: _bd58220c,
      name: "blogPosts-tarotAndPursuitOfBetter"
    }, {
      path: "/blogPosts/teePublic",
      component: _10c21b23,
      name: "blogPosts-teePublic"
    }, {
      path: "/blogPosts/whatIlearnedFromDrawingChallenge",
      component: _14734ff7,
      name: "blogPosts-whatIlearnedFromDrawingChallenge"
    }, {
      path: "/dev/webDev",
      component: _b25c6972,
      name: "dev-webDev"
    }, {
      path: "/",
      component: _0682e9d4,
      name: "index"
    }],

    fallback: false
  })
}
