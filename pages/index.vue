<template>
  <div>
    <navBar />
    <h1>Macpeters: Artist and Programmer</h1>

    <contactBar/>
  </div>
  
</template>

<script>
  // Components
  import navBar from '../components/navBar.vue'
  import contactBar from '../components/contactBar.vue'

  export default {
  name: "Home",
  components: { navBar, contactBar },
  data() {
    return {
      images: [
        {
          title: "",
          subtitle: "",
          description: "",
          keywords: ""
        }
      ],
      chosenImage: null
    };
  },
  head () {
    return {
      title: "Macpeters: Artist and Programmer",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'artDescription', name: 'description', content: 'Psychedelic visionary blacklight paintings. Created by Toronto artist, Mac Peters.'},
        { hid: 'artAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters Fine Art' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/art/' },
        { hid: `og:description`, property: 'og:description', content: 'Psychedelic visionary blacklight paintings. Created by Toronto artist, Mac Peters.' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: bliss }
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