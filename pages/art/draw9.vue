<template>
  <div>
    <h1>Macpeters: Draw9</h1>
    <breadcrumbs/>
    <artNav/>

    <div class="page-description">
      <h2>Draw9</h2>
      <p>
        The idea behind this project is just to study various subjects where I think my skills could use a 
        little work.  The intention is to do the drawings quickly, in order to get faster, more fluid, and 
        more accurate, without getting caught up in details.  These are quick sketches, but with colour.
      </p>

    </div>

    <draw9Images/>

    <blogList/>
    <teePublicAd/>
  </div>
</template>

<script>
// images

// components
import artNav from '../../components/art/artNav.vue'
import draw9Images from '../../components/art/draw9Images.vue'
import breadcrumbs from '../../components/breadcrumbs.vue'
import blogList from '../../components/blog.vue'
import teePublicAd from "../../components/ads/teePublic.vue"

export default {
  name: "Cartoons",
  components: { artNav, draw9Images, breadcrumbs, blogList, teePublicAd },
  data() {
    return {
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' },
        { link: '/art/cartoons', name: 'Cartoons' },
        { link: '/art/cattoons', name: 'Mythical Cattoons' }
      ],
      navLinks: [
        { url: '/art/cattoons', title: 'Cattoons', id: 'cattoons' },
        { url: '/art/alphabets', title: 'Alphabets', id: 'alphabets' },
        { url: '/art/draw9', title: 'Draw9', id: 'draw9' },
        { url: '/art/copyToons', title: 'copyToons', id: 'copyToons' }
      ],
      blogFilter: 'art',
      chosenImage: null
    };
  },
  head () {
    return {
      title: "Macpetes Animal Alphabets",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'comicDescription', name: 'description', content: 'Animal Alphabets drawings'},
        { hid: 'comicAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpetes Animal Alphabets' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/alphabets/' },
        { hid: `og:description`, property: 'og:description', content: 'Animal Alphabets' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: '' }
      ]
    }
  }
};
</script>

<style scoped>

  div {
    text-align: center
  }

</style>
