<template>
  <div>
    <h1>Murals and Aerosol Art</h1>
    <breadcrumbs/>
    <artNav/>
    <h2>Indoor and Outdoor murals to brighten up your business, home, or neighbourhood.</h2>

    <div class="page-description">
      <p>
        <img v-bind:src="hockeyBeesComplete" alt="Hockey Bees - completed" title="Hockey Bees - completed" />
      </p>
      <p>One of my favourite things about creating public art is fitting the art to the space it's in.
        It was fun to paint a weight lifting octopus in a fitness club, or bees playing hockey near a
        city's new hockey arena.  It gives me an extra element to play with and helps generate ideas that
        I otherwise wouldn't have had.
      </p>
      <p>
      Painting on walls is something I've been doing since I was 14 - my bedroom in highschool was one big mural.
      I find murals are the best opportunity to collaborate with other artists, because there's so much space.
      I'd love to work with more 3D spaces.
      </p>
    </div>

    <muralImages/>

    <blogList/>
  </div>
</template>

<script>
// images
import logoImage from "../../assets/logo.png";
import hockeyBeesComplete from "../../assets/graf/macpeters_hockeybees_complete.png";

// components
import artNav from '../../components/art/artNav.vue'
import muralImages from '../../components/art/muralImages.vue'
import breadcrumbs from '../../components/breadcrumbs.vue'
// Blog
import blogList from '../../components/blog.vue'

export default {
  name: "Murals",
  components: { muralImages, breadcrumbs, blogList, artNav },
  data() {
    return {
      logoImage: logoImage,
      hockeyBeesComplete: hockeyBeesComplete,
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Paintings' },
        { link: '/art/murals', name: 'Murals' }
      ],
      navLinks: [
        { url: '/art/fineArt', title: 'Fine Art', id: 'fine-art' },
        { url: '/art/skateboards', title: 'Painted Skateboard Decks', id: 'skateboards' },
        { url: '/art/murals', title: 'Murals', id: 'mural-art' }
      ],
      blogFilter: 'streetart'
    };
  },
  head () {
    return {
      title: "Macpeters Murals and Street Art",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'artDescription', name: 'description', content: 'Murals, Aerosol and Street Art. Freshen up your old garage door, beautify concrete walls, and add lively, fanciful colour to unloved spaces.'},
        { hid: 'artAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Murals, Aerosol and Street Art' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/' },
        { hid: `og:description`, property: 'og:description', content: 'Murals, Aerosol and Street Art. Freshen up your old garage door, beautify concrete walls, and add lively, fanciful colour to unloved spaces.' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: logoImage }
      ],link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  }
};
</script>

<style scoped>
</style>