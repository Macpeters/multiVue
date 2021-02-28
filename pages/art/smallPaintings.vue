<template>
  <div class="content">
    <h1>Small Paintings</h1>
    <breadcrumbs/>

    <div class="page-description">
      <p class="art-description">These paintings are 12 inches or smaller</p>
      <div id="no-neon"><a href="/art/smallPaintingsUv">Blacklight On</a></div>
      <smallPaintingImages/>
    </div>

    <blogList/>
    <society6Ad/>
  </div>
</template>

<script>

// Components
import smallPaintingImages  from '../../components/art/smallPaintingImages.vue'
import breadcrumbs    from '../../components/breadcrumbs.vue'
// Blog
import blogList       from '../../components/blog.vue'
import society6Ad from "../../components/ads/society6.vue"

export default {
  name: "SmallPaintings",
  components: { breadcrumbs, blogList, smallPaintingImages, society6Ad },
  data() {
    return {
      chosenImage: null,
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' },
        { link: '/art/fineArtSmall', name: 'SmallFineArt' }
      ],
      blogFilter: 'visionary art',
      name: 'small-paintings'
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

  .art-description {
    padding-bottom: 15px;
  }

</style>
