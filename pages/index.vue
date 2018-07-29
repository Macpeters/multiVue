<template>
  <div>
    <navBar />
    <h1>Macpeters: Artist and Programmer</h1>
    
    <div class="page-description">
      <p>
        Fullstack web developer by day, creating art and games in my off hours. The art I make ranges from low-brow
        to psychedelic or visionary. I love collaborating, and working with others. This website is currently made with Vue.js,
        Nuxt, and Served on Netlify.
      </p>
    </div>

    <div class="art-gallery">
      <a v-bind:href="chosenImage.link">
        <span class="slideImage"><img v-bind:src="chosenImage.image" /></span>
      </a>
      <div class="slideDots">
        <span v-for="image in images" :key='image.id' >  
          <span class="dot" @click='choose(image)'></span>
        </span>
      </div>
    </div>

    <contactBar/>
  </div>
  
</template>

<script>
  // Images
  import logoImage from "../assets/logo.png";
  // import gifts from "../assets/slideshow/macpeters_artGifts.png";
  import design from "../assets/slideshow/macpeters_design.png";
  // import prints from "../assets/slideshow/macpeters_artPrints.png";
  import fineArt from "../assets/slideshow/macpeters_fineArt.png";
  import tarot from "../assets/slideshow/macpeters_hiddenDreamsTarot.png";
  import murals from "../assets/slideshow/macpeters_murals.png";
  import skateboards from "../assets/slideshow/macpeters_paintedSkateboards.png";
  // Components
  import navBar from '../components/navBar.vue'
  import contactBar from '../components/contactBar.vue'

  import Vue from 'vue'
  import VueAnalytics from 'vue-analytics'

  Vue.use(VueAnalytics, {
    id: 'UA-113895926-1'
  })

  export default {
  name: "Home",
  components: { navBar, contactBar, Vue },
  data() {
    return {
      logoImage: logoImage,
      images: [
        {
          image: fineArt,
          title: 'Fine Art',
          link: '/art'
        },
        {
          image: skateboards,
          title: 'Painted Skateboards',
          link: '/skateboards'
        },
        {
          image: design,
          title: 'Design',
          link: '/dev'
        },
        {
          image: murals,
          title: 'Murals and Street Art',
          link: '/murals'
        },
        {
          image: tarot,
          title: 'Hidden Dreams Tarot',
          link: '/tarot'
        },
      ],
      imageIndex: 0,
      chosenImage: {
        image: fineArt,
        title: 'Fine Art',
        linke: '/art'
      }
    };
  },
  methods: {
    choose(img) {
      this.chosenImage = img;
    },
    next(){
      this.ImageIndex += 1;
      if(this.imageIndex >= this.images.length) {
        this.imageIndex = 0;
      }
      this.choose(this.images[this.imageIndex]);
    },
    previous(){
      this.ImageIndex -= 1;
      if(this.imageIndex < 0) {
        this.imageIndex = this.images.length - 1;
      }
      this.choose(this.images[this.imageIndex]);
    }
  },
  beforeMount(){
    this.choose(this.images[this.imageIndex])    
  },
  head () {
    return {
      title: "Macpeters: Artist and Programmer",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'artDescription', name: 'description', content: 'Fine Art, Murals, Painted Skateboard Decks, Cartoons, Web and Game Development'},
        { hid: 'artAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters: Artist and Programmer' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/' },
        { hid: `og:description`, property: 'og:description', content: 'Fine Art, Murals, Painted Skateboard Decks, Cartoons, Web and Game Development' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: logoImage }
      ],link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  }
};
</script>

<style scoped>
  div {
    text-align: center
  }

  /* Slideshow */
  .slideDots {
    padding-top: 10px;
    width: 100%;
    display: block;
    clear: both;
  }
  .dot {
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    margin-left: 15px;
  }
  .dot:hover {
    background-color: #0651cc;
  }
  .slideImage img{
    max-height: 350px;
    width: 100%;
  }
</style>
