<template>
  <div>
    <h1>Macpeters: Cartoons</h1>
    <breadcrumbs/>
    <artNav/>

    <div class="page-description">
      <h2>Animal Alphabets</h2>
      <p>
        Following the prompts of the weekly drawing challenge, Animal Alphabets.  Series one is Extinct.
      </p>

    </div>

    <alphabetImages/>

    <blogList/>
    <teePublicAd/>
  </div>
</template>

<script>
// images

// components
import artNav from '../../components/art/artNav.vue'
import alphabetImages from '../../components/art/alphabetImages.vue'
import breadcrumbs from '../../components/breadcrumbs.vue'
import blogList from '../../components/blog.vue'
import teePublicAd from "../../components/ads/teePublic.vue"

export default {
  name: "Cartoons",
  components: { artNav, alphabetImages, breadcrumbs, blogList, teePublicAd },
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
        { url: '/art/copyToons', title: 'copyToons', id: 'copyToons' },
        { url: '/art/thatRatBastard', title: 'That Rat Bastard', id: 'thatRatBastard' },
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
        { hid: `og:title`, property: 'og:title', content: 'Macpeters Animal Alphabets' },
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
