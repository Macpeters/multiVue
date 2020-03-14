<template>
  <div class="content">
    <h1>Art</h1>
    <breadcrumbs/>

    <section>
      <p>
        The most recent painting I've finished is Mother Aya, which I started during my trip
        to Peru where I participated in a Visionary Art Retreat at
        <a href="https://www.kataricenter.com/"></a>Katari Center</a>
      </p>
      <p>
        <a href="art/fineArt">Check out more of my Visionary Paintings</a>
      </p>
    </section>
    <img src="~/assets/fineArt/macpeters_motherAya.jpg" alt="Mother Aya painting by Macpeters"/>
    <blogList/>
  </div>
</template>

<script>
// Components
import breadcrumbs from '../../components/breadcrumbs.vue'
import blogList from '../../components/blog.vue'

export default {
  name: "Art",
  components: { breadcrumbs, blogList },
  data() {
    return {
      chosenImage: null,
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' }
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
  img {
    max-width: 80vw;
    max-height: 80vh;
    padding-top: 10px;
  }
</style>
