<template>
  <div>
    <h1>Art</h1>
    <breadcrumbs/>
     <artNav/>

      <section>
        <p>The most recent painting I've finished is this self-portrait, which I started this year at COSM during 
        a Visionary Art Intensive workshop with Alex and Allyson Grey.  I started so many paintings over the summer, 
        it took me the next 6 months to finish them all.  I'm working on a brand new painting called Serenity.  For
        now, you can <a href="art/fineArt">check out more of my fine art</a> or click any of the above tabs to see 
        what other art I've been working on.</p>
        <img src="~/assets/fineArt/macpeters_selfPortrait.png" alt="self portrait" title="self portrait" />
      </section>

     <blogList/>
  </div>
</template>

<script>
import selfPortrait   from "../../assets/fineArt/macpeters_selfPortrait.png";

// Components
import artNav from '../../components/art/artNav.vue'
import imageList from '../../components/art/imageList.vue'
import breadcrumbs from '../../components/breadcrumbs.vue'
import blogList from '../../components/blog.vue'

export default {
  name: "Art",
  components: { artNav, breadcrumbs, blogList },
  data() {
    return {
      chosenImage: null,
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' }
      ],
      navLinks: [
        { url: '/art/fineArt', title: 'Fine Art', id: 'fine-art' },
        { url: '/art/skateboards', title: 'Painted Skateboard Decks', id: 'skateboards' },
        { url: '/art/murals', title: 'Murals', id: 'mural-art' },
        { url: '/art/cartoons', title: 'Cartoons', id: 'cartoons' }
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
  p {
    width: 80%;
    text-align: center;
    padding-left: 10%;
    padding-top: 10px;
  }
  img {
    width: 80%;
    padding-top: 10px;
  }
</style>
