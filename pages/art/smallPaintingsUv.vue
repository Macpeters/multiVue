<template>
  <div>
    <h1>Macpeters: UV Reactive Blacklight Art</h1>
    <breadcrumbs/>

    <h2>Visionary Psychedelic Blacklight Paintings</h2>

    <div class="page-description">
      <div id="neon"><a href="/art/fineArt">Blacklight Off</a></div>
    </div>

    <smallPaintingsUvImages/>

    <blogList/>

  </div>
</template>

<script>
// Components
import smallPaintingsUvImages    from '../../components/art/smallPaintingsUvImages.vue'
import breadcrumbs        from '../../components/breadcrumbs.vue'
// Blog
import blogList           from '../../components/blog.vue'

export default {
  name: "Art",
  components: { breadcrumbs, blogList, smallPaintingsUvImages},
  data() {
    return {
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' },
        { link: '/art', name: 'Small Paintings UV' }
      ],
      blogFilter: 'blacklight',
      name: 'fine-art'
    };
  },
  head () {
    return {
      title: "Macpeters UV Reactive Blacklight Paintings",
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
