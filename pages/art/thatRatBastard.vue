<template>
  <div>
    <h1>Macpeters: That Rat Bastard</h1>
    <breadcrumbs/>
    <artNav/>

    <div class="page-description">
      <h2>That Rat Bastard</h2>
      <p>
        This began as an October drawing challenge - I wanted to develop a single character, with 
        a focus on consistency, and dynamic poses.  Later, I decided to develop him further, 
        and put some more thought into facial expressions.  I think I can push the expressiveness
        a lot further, but I'll have to keep playing.  I've also begun designing another character
        that Rat Bastard can interact with in the future.
      </p>

    </div>

    <ratBastardImages/>

    <blogList/>
    <teePublicAd/>
  </div>
</template>

<script>
// images

// components
import artNav from '../../components/art/artNav.vue'
import ratBastardImages from '../../components/art/ratBastardImages.vue'
import breadcrumbs from '../../components/breadcrumbs.vue'
import blogList from '../../components/blog.vue'
import teePublicAd from "../../components/ads/teePublic.vue"

export default {
  name: "ThatRatBastard",
  components: { artNav, ratBastardImages, breadcrumbs, blogList, teePublicAd },
  data() {
    return {
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' },
        { link: '/art/cartoons', name: 'Cartoons' },
        { link: '/art/cattoons', name: 'That Rat Bastard' }
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
      title: "Macpeters - That Rat Bastard",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'comicDescription', name: 'description', content: 'That Rat Bastard character development'},
        { hid: 'ratAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters That Rat Bastard' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/alphabets/' },
        { hid: `og:description`, property: 'og:description', content: 'That Rat Bastard' },
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
