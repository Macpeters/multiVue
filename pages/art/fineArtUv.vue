<template>
  <div>
    <h1>Macpeters: UV Reactive Blacklight Art</h1>
    <breadcrumbs/>

    <h2>Visionary Psychedelic Blacklight Paintings</h2>

    <div class="page-description">
      <div id="neon"><a href="/art/fineArt">Blacklight Off</a></div>
      <p>
        I often work with a mixture of airbrush and brush paint, and I'll start with base (not blacklight/uv reactive) colours,
        moving onto neon once I have the basic structure in place. Orbs and crystals are an ongoing theme for me these days.
        I might work on one painting for months, adding layers to create depth, transparency, and different lighting effects.
      </p>
    </div>

    <fineArtUvImages/>

    <blogList/>

  </div>
</template>

<script>
// Components
import fineArtUvImages    from '../../components/art/fineUvArtImages.vue'
import breadcrumbs        from '../../components/breadcrumbs.vue'
// Blog
import blogList           from '../../components/blog.vue'

export default {
  name: "FineArtUvImages",
  components: { breadcrumbs, blogList, fineArtUvImages},
  data() {
    return {
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' },
        { link: '/art', name: 'FineArt' }
      ],
      blogFilter: 'blacklight',
      name: 'fine-art'
    };
  },
  head () {
    return {
      title: "UV Reactive Blacklight Paintings",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'artDescription', name: 'description', content: 'Psychedelic, visionary blacklight paintings incorporating low-brow pop surrealism and metamodernism. Created by Toronto artist, Mac Peters.'},
        { hid: 'artAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters UV Reactive Blacklight Paintings' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/uvArt/' },
        { hid: `og:description`, property: 'og:description', content: 'Psychedelic, visionary blacklight paintings incorporating low-brow pop surrealism and metamodernism. Created by Toronto artist, Mac Peters.' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: '' }
      ]
    }
  }
};
</script>

<style scoped>

  div {
    background-color: black;
    color: white;
    text-align: center;
  }

  #neon{
    font-size: 30px;
    font-family: 'Futura';
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
    text-align: center;
  }

</style>
