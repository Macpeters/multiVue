import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _05bf972c = () => interopDefault(import('../pages/art/index.vue' /* webpackChunkName: "pages/art/index" */))
const _9eadd9e4 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _a3ac704e = () => interopDefault(import('../pages/dev.vue' /* webpackChunkName: "pages/dev" */))
const _0aaf5e8e = () => interopDefault(import('../pages/tarot.vue' /* webpackChunkName: "pages/tarot" */))
const _5935dbcc = () => interopDefault(import('../pages/art/aboutArtist.vue' /* webpackChunkName: "pages/art/aboutArtist" */))
const _4d529e2d = () => interopDefault(import('../pages/art/drawings.vue' /* webpackChunkName: "pages/art/drawings" */))
const _da6b1b3e = () => interopDefault(import('../pages/art/fineArt.vue' /* webpackChunkName: "pages/art/fineArt" */))
const _4c646662 = () => interopDefault(import('../pages/art/fineArtUv.vue' /* webpackChunkName: "pages/art/fineArtUv" */))
const _4fd42736 = () => interopDefault(import('../pages/art/murals.vue' /* webpackChunkName: "pages/art/murals" */))
const _c6db9dc2 = () => interopDefault(import('../pages/art/skateboards.vue' /* webpackChunkName: "pages/art/skateboards" */))
const _525b6d80 = () => interopDefault(import('../pages/art/smallPaintings.vue' /* webpackChunkName: "pages/art/smallPaintings" */))
const _6ba315c1 = () => interopDefault(import('../pages/art/smallPaintingsUv.vue' /* webpackChunkName: "pages/art/smallPaintingsUv" */))
const _77e6f175 = () => interopDefault(import('../pages/blogPosts/activeRecordQueries.vue' /* webpackChunkName: "pages/blogPosts/activeRecordQueries" */))
const _2408cb10 = () => interopDefault(import('../pages/blogPosts/aLookBack2016.vue' /* webpackChunkName: "pages/blogPosts/aLookBack2016" */))
const _2416e291 = () => interopDefault(import('../pages/blogPosts/aLookBack2017.vue' /* webpackChunkName: "pages/blogPosts/aLookBack2017" */))
const _2424fa12 = () => interopDefault(import('../pages/blogPosts/aLookBack2018.vue' /* webpackChunkName: "pages/blogPosts/aLookBack2018" */))
const _24331193 = () => interopDefault(import('../pages/blogPosts/aLookBack2019.vue' /* webpackChunkName: "pages/blogPosts/aLookBack2019" */))
const _256916a9 = () => interopDefault(import('../pages/blogPosts/aLookBack2020.vue' /* webpackChunkName: "pages/blogPosts/aLookBack2020" */))
const _efd4dad2 = () => interopDefault(import('../pages/blogPosts/howToFailAtKickstarter.vue' /* webpackChunkName: "pages/blogPosts/howToFailAtKickstarter" */))
const _dd9ffb3c = () => interopDefault(import('../pages/blogPosts/howToPracticeDrawing.vue' /* webpackChunkName: "pages/blogPosts/howToPracticeDrawing" */))
const _65a8719e = () => interopDefault(import('../pages/blogPosts/isFacebookTheEnemy.vue' /* webpackChunkName: "pages/blogPosts/isFacebookTheEnemy" */))
const _c08a2c20 = () => interopDefault(import('../pages/blogPosts/photographingBlacklightArt.vue' /* webpackChunkName: "pages/blogPosts/photographingBlacklightArt" */))
const _7faacf40 = () => interopDefault(import('../pages/blogPosts/processOfAMural.vue' /* webpackChunkName: "pages/blogPosts/processOfAMural" */))
const _18ee1b80 = () => interopDefault(import('../pages/blogPosts/repurcussionsOfDDOSAttack.vue' /* webpackChunkName: "pages/blogPosts/repurcussionsOfDDOSAttack" */))
const _bd58220c = () => interopDefault(import('../pages/blogPosts/tarotAndPursuitOfBetter.vue' /* webpackChunkName: "pages/blogPosts/tarotAndPursuitOfBetter" */))
const _10c21b23 = () => interopDefault(import('../pages/blogPosts/teePublic.vue' /* webpackChunkName: "pages/blogPosts/teePublic" */))
const _14734ff7 = () => interopDefault(import('../pages/blogPosts/whatIlearnedFromDrawingChallenge.vue' /* webpackChunkName: "pages/blogPosts/whatIlearnedFromDrawingChallenge" */))
const _0682e9d4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
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
    path: "/dev",
    component: _a3ac704e,
    name: "dev"
  }, {
    path: "/tarot",
    component: _0aaf5e8e,
    name: "tarot"
  }, {
    path: "/art/aboutArtist",
    component: _5935dbcc,
    name: "art-aboutArtist"
  }, {
    path: "/art/drawings",
    component: _4d529e2d,
    name: "art-drawings"
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
    path: "/art/skateboards",
    component: _c6db9dc2,
    name: "art-skateboards"
  }, {
    path: "/art/smallPaintings",
    component: _525b6d80,
    name: "art-smallPaintings"
  }, {
    path: "/art/smallPaintingsUv",
    component: _6ba315c1,
    name: "art-smallPaintingsUv"
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
    path: "/blogPosts/aLookBack2020",
    component: _256916a9,
    name: "blogPosts-aLookBack2020"
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
    path: "/",
    component: _0682e9d4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
