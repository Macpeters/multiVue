<template>
  <div>
    <h1>Macpeters: Artist and Programmer</h1>

    <div class="page-description">
      <h2>Fullstack web developer by day, creating art and games in my off hours.</h2>
      <span>The art I make ranges from low-brow
      to psychedelic or visionary. I love collaborating, and working with others. This website is currently made with Vue.js,
      Nuxt, and Served on Netlify.</span>
    </div>

    <div class="art-gallery">
      <div>
        <span 
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
  </div>

</template>

<script>
  // Images
  import logoImage  from "../assets/logo.png";
  import paintings  from "../assets/index/macpeters_paintings.png";
  import cartoons   from "../assets/index/macpeters_cartoons.png";
  import games      from "../assets/index/macpeters_games.png";
  import tarot      from "../assets/index/macpeters_tarot.png";
  import webDev     from "../assets/index/macpeters_webdev.png";

  export default {
  name: 'Home',
  components: { },
  data() {
    return {
      logoImage: logoImage,
      images: [
        {
          image: paintings,
          title: 'Paintings',
          link: '/art',
          description: 'Psychedelic fine art, hand-painted skateboard decks, and murals'
        },
        {
          image: cartoons,
          title: 'Cartoons',
          link: '/cartoons',
          description: 'digital sketches, cartoons, characters, drawing challenges'
        },
        {
          image:  webDev,
          title: 'Web Developement',
          link: '/webDev',
          description: 'Professional Web Development and open source projects'
        },
        {
          image: games,
          title: 'Game Developement',
          link: '/gameDev',
          description: 'indie game developement projects, including RaveMau5'
        },
        {
          image: tarot,
          title: 'Major Arcana Tarot Decks',
          link: '/tarot',
          description: 'Hidden Dreams and Cutie Pie Tarot major arcana decks'
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
  .page-teaser {
    max-width: 275px;
    width: 40%;
    height: 250px;
    display: inline-block;
    border: 1px solid black;
    padding: 2px;
    margin: 5px;
    clear: both;
  }

  .page-teaser :hover {
    color: #897DF4;
  }

  .teaser-image img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    overflow: hidden;
  }

  .teaser-title {
    font-weight: bold;
  }
  .teaser-text {
    height: 100px;
  }
</style>
