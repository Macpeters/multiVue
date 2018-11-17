<template>
  <div>
    <h1>Hand Painted Skateboard Decks</h1>
    <breadcrumbs/>
    <artNav/>
    <h2>Custom Painted on Request</h2>

    <div class="page-description">
      All of these decks are recycled - they had their day in the sun, and were ridden to near destruction.
      I enjoy giving new life to something that might otherwise have wound up in a dump somewhere.
      If you are in Toronto, and have a bunch of old decks lying around, let me know, and I'll take them off your hands - even snapped in half.
    </div>

    <artImages/>

    <blogList/>

  </div>
</template>

<script>
// images
// import logoImage from "../../assets/logo.png";
// components
import artNav from '../../components/artNav.vue'
import artImages       from '../../components/art/skateboardImages.vue'
import breadcrumbs from '../../components/breadcrumbs.vue'
// Blog
import blogList from '../../components/blog.vue'

const base_keywords = "skateboards, skate art, skateboard art, painted decks, lowbrow, street art, recycled skateboards, sk8, skater, custom deck, psychedelic, visionary, ";

export default {
  name: "art-skateboards",
  components: { imageList, breadcrumbs, blogList, artNav, artImages },
  data() {
    return {
      // logoImage: logoImage,
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Paintings' },
        { link: '/skateboards', name: 'Skateboards' }
      ],
      chosenImage: null,
      blogFilter: 'art'
    };
  },
  head () {
    return {
      title: "Macpeters Hand-painted Skateboard Decks",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'skateboardsDescription', name: 'description', content: 'Hand-painted skate visionary and skate art on recycled skateboard decks. New life is given to these discarded toys by upcycling them into trendy wall art.'},
        { hid: 'artAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters Hand-painted Skateboard Decks' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/' },
        { hid: `og:description`, property: 'og:description', content: 'Hand-painted skate visionary and skate art on recycled skateboard decks. New life is given to these discarded toys by upcycling them into trendy wall art.' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: '' }
      ],link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  }
};
</script>

<style scoped>

  div {
    text-align: center
  }

</style>
