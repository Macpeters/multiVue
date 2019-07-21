<template>
  <div>
    <h1>Macpeters: Copy Toons</h1>
    <breadcrumbs/>
    <artNav/>

    <div class="page-description">
      <h2>Copy Toons</h2>
      <p>
        Here's how this challenge works:  Take 2 characters from a given cartoon world, and draw each one at least twice.  
        This is to study the style and construction of the characters.  The final step is to create a new character that 
        looks like it would fit into that world.  I've put my creation in the center.
      </p>

    </div>

    <copyToonsImages/>

    <blogList/>
    <teePublicAd/>
  </div>
</template>

<script>
// images

// components
import artNav from '../../components/art/artNav.vue'
import copyToonsImages from '../../components/art/copyToonsImages.vue'
import breadcrumbs from '../../components/breadcrumbs.vue'
import blogList from '../../components/blog.vue'
import teePublicAd from "../../components/ads/teePublic.vue"

export default {
  name: "Cartoons",
  components: { artNav, copyToonsImages, breadcrumbs, blogList, teePublicAd },
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
