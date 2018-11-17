<template>
  <div>
    <h1>Art Index</h1>
    <h2>Art</h2>

    <div class="page-description">
      <b-nav>
        <b-nav-item to="/art/fineArt">Fine Art</b-nav-item>
        <b-nav-item to="/art/skateboards">Skateboards</b-nav-item>
      </b-nav>
      <nuxt-child v-if="$route.params.artType"/>

    </div>

    <blogList/>
  </div>
</template>

<script>

// Components
import artNav from '../../components/artNav.vue'
import imageList from '../../components/imageList.vue'
import breadcrumbs from '../../components/breadcrumbs.vue'
// Blog
import blogList from '../../components/blog.vue'

const base_keywords = "painting, visionary, sci-fi, art, blacklight, uv reactive, psychedelic, psychedelic painting, fantasy, "

export default {
  name: "Art",
  components: { breadcrumbs, blogList, artNav },
  data() {
    return {
      chosenImage: null,
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Paintings' },
        { link: '/art', name: 'FineArt' }
      ],
      blogFilter: 'visionary art',
      name: 'fine-art'
    };
  },
  head () {
    return {
      title: "Macpeters Original Fine Art Paintings",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'artDescription', name: 'description', content: 'Psychedelic, visionary blacklight paintings incorporating low-brow pop surrealism and metamodernism. Created by Toronto artist, Mac Peters.'},
        { hid: 'artAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters Original Fine Art Paintings' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/art/' },
        { hid: `og:description`, property: 'og:description', content: 'Psychedelic, visionary blacklight paintings incorporating low-brow pop surrealism and metamodernism. Created by Toronto artist, Mac Peters.' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: "" }
      ]
    }
  }
};
</script>

<style scoped>
  div {
    text-align: center
  }

  #no-neon{
    font-size: 30px;
    font-family: 'Futura';
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
    text-align: center;
  }

</style>
