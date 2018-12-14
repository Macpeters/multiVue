<template>
  <div>
    <h1>Fine Art Paintings</h1>
    <breadcrumbs/>
    <artNav/>

    <div class="page-description">
      <div id="no-neon"><a href="/art/fineArtUv">Blacklight On</a></div>
      <fineArtImages/>
    </div>

    <blogList/>
  </div>
</template>

<script>

// Components
import artNav         from '../../components/art/artNav.vue'
import fineArtImages  from '../../components/art/fineArtImages.vue'
import breadcrumbs    from '../../components/breadcrumbs.vue'
// Blog
import blogList       from '../../components/blog.vue'

export default {
  name: "Art",
  components: { artNav, breadcrumbs, blogList, fineArtImages },
  data() {
    return {
      chosenImage: null,
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Paintings' },
        { link: '/art/fineArt', name: 'FineArt' }
      ],
      navLinks: [
        { url: '/art/fineArt', title: 'Fine Art', id: 'fine-art' },
        { url: '/art/skateboards', title: 'Painted Skateboard Decks', id: 'skateboards' },
        { url: '/art/murals', title: 'Murals', id: 'mural-art' }
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
