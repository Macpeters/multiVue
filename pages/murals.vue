<template>
  <div>
    <navBar />

    <h1>Murals and Aerosol Art</h1>
    <breadcrumbs/>
    <h2>Indoor and Outdoor murals to brighten up your business, home, or neighbourhood.</h2>

    <div class="page-description">
      I haven't used spraypaint for very long, but it sure is fun.
      Painting on walls is something I've been doing since I was 14 - my bedroom in highschool was one big mural.
      I find murals are the best opportunity to collaborate with other artists, because there's so much space.
      I'd love to work with more 3D spaces.
    </div>

    <imageList/>

    <blogList/>

    <contactBar/>
    
  </div>
</template>

<script>
// images
import logoImage from "../assets/logo.png";
// murals
import chamBee from "../assets/graf/macpeters_chamBee.png";
import demolition from "../assets/graf/macpeters_demolitionParty.png";
import mouseBot from "../assets/graf/macpeters_mouseNBot.png";
import octoBuddy from "../assets/graf/macpeters_octoBuddy.png";
import pastaMancer from "../assets/graf/macpeters_pastaMancer.png";
import ribbit from "../assets/graf/macpeters_ribbit.png";
// Thumbnails
import chamBee_thumb from "../assets/graf/thumbnails/macpeters_chamBee.png";
import demolition_thumb from "../assets/graf/thumbnails/macpeters_demolitionParty.png";
import mouseBot_thumb from "../assets/graf/thumbnails/macpeters_mouseNBot.png";
import octoBuddy_thumb from "../assets/graf/thumbnails/macpeters_octoBuddy.png";
import pastaMancer_thumb from "../assets/graf/thumbnails/macpeters_pastaMancer.png";
import ribbit_thumb from "../assets/graf/thumbnails/macpeters_ribbit.png";
// components
import imageList from '../components/imageList.vue'
import navBar from '../components/navBar.vue'
import contactBar from '../components/contactBar.vue'
import breadcrumbs from '../components/breadcrumbs.vue'
// Blog
import blogList from '../components/blog.vue'

const base_keywords = "skateboards, skate art, skateboard art, painted decks, lowbrow, street art, recycled skateboards, sk8, skater, custom deck, psychedelic, visionary, ";

export default {
  name: "Murals",
  components: { imageList, navBar, contactBar, breadcrumbs, blogList },
  data() {
    return {
      logoImage: logoImage,
      images: [
        {
          image: chamBee,
          thumb: chamBee_thumb,
          title: "Chameleon, Wasp",
          subtitle: "Spray paint on garage door",
          description: "Chameleon, Sassy Wasp, painted on garage doors in the Alleyway of Dreams, Toronto.",
          keywords: "alleyway of dreams, alley, back alley, garage door, outdoor art, public art, spray paint, aerosol, wasp, bee, chameleon, sunset"
        },
        {
          image: demolition,
          thumb: demolition_thumb,
          title: "Alien summoning magic sweets",
          subtitle: "UV reactive acrylic on wall",
          description: "With the building to be demolished soon - this collaborative mural was done in the spirit of coming together to make friends, and create a magical experience.",
          keywords: base_keywords + "building, demolition, free for all, blacklight, jungle, dnb, party, collaboration, party art, pyramid, alien, summoning, sweetness, sugar, tentacles"
        },
        {
          image: mouseBot,
          thumb: mouseBot_thumb,
          title: "Oily Robot and Spray Mouse",
          subtitle: "Spray paint on abandoned construction wood",
          description: "Robot drooling oil, painted on abandoned construction board.  On the other side, a spray painting mouse",
          keywords: "robot, oil, drool, recycled, spraypaint, underpass park, under a bridge, mouse, montana, m94"
        },
        {
          image: octoBuddy,
          thumb: octoBuddy_thumb,
          title: "Octo-buddy",
          subtitle: "Acrylic on wall at Fulton Fitness, St. Catherines",
          description: "Weight lifting octopus gives encouragement to those working out at Fulton Fitness.",
          keywords: base_keywords + "octopuss, wight lifter, exercise, keeping in shape, fulton fitness, working out, motivation, tentacles"
        },
        {
          image: pastaMancer,
          thumb: pastaMancer_thumb,
          title: "Delicious Mushroom Wizard",
          subtitle: "Spray paint, brush paint on wall",
          description: "Mushroom Wizard enjoying some pasta at Pastamancers in London, Ontario",
          keywords: base_keywords + "restaurant, pastamancers, pasta, mushroom, spagetti, noodles, tomato sauce, yummy, magic spice, wizard, spray paint, aerosol"
        },
        {
          image: ribbit,
          thumb: ribbit_thumb,
          title: "Ribbit",
          subtitle: "Spray paint on wooden door",
          description: "Painted during a workshop at Mural Routes, Scarborough.",
          keywords: "frog, storm, ribbit, workshop, mediah, spraypaint, mural routes, scarborough, outdoor art"  
        }
      ],
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' },
        { link: '/murals', name: 'Murals' }
      ],
      chosenImage: null,
      blogFilter: 'art'
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
        { hid: `og:image`, property: 'og:image', content: octoBuddy_thumb }
      ],link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  }
};
</script>

<style scoped>

  div {
    text-align: center
  }

</style>
