<template>
  <div class="content">
    <h1>Macpeters: Artist and Programmer</h1>

    <div class="page-description">
      <h2>Fullstack web developer by day, creating art and games in my off hours.</h2>
      <span>The art I make ranges from low-brow
      to psychedelic or visionary. I love collaborating, and working with others. This website is currently made with Vue.js,
      Nuxt, and Served on Netlify.</span>
    </div>

    <div>
      <div>
        <span
          class="box"
          v-for="image in images"
          :key="image.id" >
          <div class="page-teaser">
            <a :href="image.link">
              <div class="teaser-image"><img
                :src="image.image"
                :alt="image.title"
                :title="image.title" >
              </div>
              <div class="teaser-text">
                <div class="teaser-title">{{ image.title }}</div>
                <div>{{ image.description }}</div>
              </div>
            </a>
          </div>
        </span>
      </div>
    </div>
    <teePublicAd/>
  </div>

</template>

<script>
  // Images
  import logoImage  from "../assets/logo.png";
  import teePublicAd from "../components/ads/teePublic.vue"
  import paintings  from "../assets/index/macpeters_paintings.png";
  import cartoons   from "../assets/index/macpeters_cartoons.png";
  import tarot      from "../assets/index/macpeters_tarot.png";
  import webDev     from "../assets/index/macpeters_webdev.png";

  export default {
  name: 'Home',
  components: { teePublicAd },
  data() {
    return {
      logoImage: logoImage,
      images: [
        {
          image: paintings,
          title: 'Paintings',
          link: '/art/fineart/',
          description: 'Psychedelic UV reactive fine art, hand-painted skateboard decks, and murals'
        },
        {
          image: cartoons,
          title: 'Drawings',
          link: '/art/drawings',
          description: 'digital sketches, cartoons, characters, drawing challenges'
        },
        {
          image:  webDev,
          title: 'Web Developement',
          link: '/dev/webDev',
          description: 'Professional Web Development, Indie Games, and open source projects'
        },
        {
          image: tarot,
          title: 'Major Arcana Tarot Decks',
          link: '/tarot',
          description: 'Cutie Pie Tarot deck and Hidden Dreams Tarot deck with companion guide book'
        }
      ],
    };
  },
  head () {
    return {
      title: "Macpeters: Artist and Programmer",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'title', content: 'Macpeters: Artist and Programmer' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { name: 'p:domain_verify', content: '"10431f5047fa3c8cd403a436d675fe71' },
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
  .box:hover {
    opacity: 0.5;
    -webkit-transition: opacity 2s; /* Safari */
    transition: opacity 1s;
    transition-duration: 1s;
  }

  .page-teaser {
    width: 40%;
    height: 350px;
    max-width: 460px;
    display: inline-block;
    padding: 2px;
    margin: 5px;
    clear: both;
    background-color: #eeddff;
  }
  .page-teaser:hover {
    border: 2px solid #6b0fc7;
  }

  .teaser-image img {
    padding: 5px;
    width: 80%;
    height: 220px;
    object-fit: cover;
    overflow: hidden;
  }

  .teaser-title {
    font-weight: bold;
  }

   @media screen and (max-width: 750px){
    .page-teaser {
      background-color: #eeddff;
      width: 80%;
      height: 325px;
    }

    .teaser-image img {
      height: 220px;
      width: 80%;
      padding: 10px;
    }
  }
</style>
