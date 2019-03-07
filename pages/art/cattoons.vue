<template>
  <div>
    <h1>Macpeters: Mythical Cattoons</h1>
    <breadcrumbs/>
    <artNav/>

    <div class="page-description">
      <h2>A Variety of Cartoon Cats</h2>
      <p>
        I started drawing these cats for Drawtober, 2018.  I've grouped them together 
        in small collections for sticker sheets. There seems to be an endless variety 
        of ways to draw cats, so I've started on a second series of spring cats, 
        coming soon! 
      </p>

    </div>

    <cattoonImages/>

    <blogList/>
    <teePublicAd/>
  </div>
</template>

<script>
// images

// components
import artNav from '../../components/art/artNav.vue'
import cattoonImages from '../../components/art/cattoonImages.vue'
import breadcrumbs from '../../components/breadcrumbs.vue'
import blogList from '../../components/blog.vue'
import teePublicAd from "../../components/ads/teePublic.vue"

export default {
  name: "Cartoons",
  components: { artNav, cattoonImages, breadcrumbs, blogList, teePublicAd },
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
        { url: '/art/alphabets', title: 'Alphabets', id: 'alphabets' }
      ],
      blogFilter: 'art',
      chosenImage: null
    };
  },
  head () {
    return {
      title: "Macpetes Mythical Cattoons",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'comicDescription', name: 'description', content: 'Cartoon cats'},
        { hid: 'comicAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpetes Mythical Cattoons' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/cattoons/' },
        { hid: `og:description`, property: 'og:description', content: 'Cartoon cats' },
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
