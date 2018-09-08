<template>
  <div>
    <navBar />

    <h1>Hand Painted Skateboard Decks</h1>
    <breadcrumbs/>
    <artNav/>
    <h2>Custom Painted on Request</h2>

    <div class="page-description">
      All of these decks are recycled - they had their day in the sun, and were ridden to near destruction.
      I enjoy giving new life to something that might otherwise have wound up in a dump somewhere.
      If you are in Toronto, and have a bunch of old decks lying around, let me know, and I'll take them off your hands - even snapped in half.
    </div>

    <imageList/>

    <blogList/>

    <contactBar/>

  </div>
</template>

<script>
// images
import logoImage from "../assets/logo.png";
// skate decks
import brokenRobot from "../assets/skateboards/macpeters_brokenRobot.png";
import drWho from "../assets/skateboards/macpeters_drWho.png";
import jerryBear from "../assets/skateboards/macpeters_jerryBear.png";
import mushroomEye from "../assets/skateboards/macpeters_mushroomEye.png";
import psychedelicBee from "../assets/skateboards/macpeters_psychedelicBee.png";
import tikiFaces from "../assets/skateboards/macpeters_tikiFaces.png";
import trickRTreat from "../assets/skateboards/macpeters_trickrtreat.png";
// thumbnails
import brokenRobot_thumb from "../assets/skateboards/thumbnails/macpeters_brokenRobot.png";
import drWho_thumb from "../assets/skateboards/thumbnails/macpeters_drWho.png";
import jerryBear_thumb from "../assets/skateboards/thumbnails/macpeters_jerryBear.png";
import mushroomEye_thumb from "../assets/skateboards/thumbnails/macpeters_mushroomEye.png";
import psychedelicBee_thumb from "../assets/skateboards/thumbnails/macpeters_psychedelicBee.png";
import tikiFaces_thumb from "../assets/skateboards/thumbnails/macpeters_tikiFaces.png";
import trickRTreat_thumb from "../assets/skateboards/thumbnails/macpeters_trickrtreat.png";
// components
import artNav from '../components/artNav.vue'
import imageList from '../components/imageList.vue'
import navBar from '../components/navBar.vue'
import contactBar from '../components/contactBar.vue'
import breadcrumbs from '../components/breadcrumbs.vue'
// Blog
import blogList from '../components/blog.vue'

const base_keywords = "skateboards, skate art, skateboard art, painted decks, lowbrow, street art, recycled skateboards, sk8, skater, custom deck, psychedelic, visionary, ";

export default {
  name: "Skateboards",
  components: { imageList, navBar, contactBar, breadcrumbs, blogList, artNav },
  data() {
    return {
      logoImage: logoImage,
      images: [
        {
          image: brokenRobot,
          thumb: brokenRobot_thumb,
          title: "Broken Robot",
          description: "With wires sparking, and cracked eyes, this poor robot needs some TLC",
          keywords: base_keywords + "robot, wires, tech, mech, bot, technology, broken robot, disassembled"
        },
        {
          image: drWho,
          thumb: drWho_thumb,
          title: "Dr Who: Exterminate",
          description: "Inspired by Dr Who: a tardis, a dalek, travel through time and space, and that question that can never be answered: Dr. Who?",
          keywords: base_keywords + "Dr Who, tardis, dalek, space travel, exterminate, time, space, time and relative dimension in space, doctor, time lords, companion, police box, blue box"
        },
        {
          image: jerryBear,
          thumb: jerryBear_thumb,
          title: "Grateful Dead Jerry Bear",
          description: "Inspired by the music and art of the Grateful Dead band and movement",
          keywords: base_keywords + "grateful dead, the dead, jerry, jerry garcia, dancing bears, jerry bears, deadhead, hippy, festival, acid, nitrous, nitrous oxide, laughing gas, tour, heads, music, dancing, uncle john's band, scarlet begonia, wings, flight, high, high on life, eyes, drips, paint, fly"
        },
        {
          image: mushroomEye,
          thumb: mushroomEye_thumb,
          title: "Mushroom Eye",
          description: "Psychedelic skateboard painted at COSM during a Chris Dyer workshop",
          keywords: base_keywords + "mushroom, amanita, magic mushroom, red and white, eyeballs, many eyes, multi sight, symmetry, cosmic, energy, rainbows, fractals, sacred geometry, flower of life, mandala"
        },
        {
          image: psychedelicBee,
          thumb: psychedelicBee_thumb,
          title: "Psychedelic Bee",
          description: "Three eyed bee with veiny wings",
          keywords: base_keywords + "bee, three eyed, third eye, bug, insect, pollinator, flight, badass, flower, pollen, spread pollen"
        },
        {
          image: tikiFaces,
          thumb: tikiFaces_thumb,
          title: "Super Friends",
          description: "An unusual group of characters",
          keywords: base_keywords + "faces, friends, super friends, unique characters, different faces, different colours, different expressions, totem, tropical, flowers"  
        },
        {
          image: trickRTreat,
          thumb: trickRTreat_thumb,
          title: "Sam from Trick R Treat",
          description: "Sam from the cult classic Trick R Treat movie",
          keywords: base_keywords + "trick 'r treat, sam, samhain, trick or treat, movie, candy, lollypop, halloween, blood, costume, burlap, candy corn, button eyes, spirit, kids, horror, film"
        }
      ],
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Paintings' },
        { link: '/skateboards', name: 'Skateboards' }
      ],
      chosenImage: null,
      blogFilter: 'art'
    };
  },
  head () {
    return {
      title: "Macpeters Hand-painted Skateboard Decks",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'skateboardsDescription', name: 'description', content: 'Hand-painted skate visionary and skate art on recycled skateboard decks. New life is given to these discarded toys by upcycling them into trendy wall art.'},
        { hid: 'artAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters Hand-painted Skateboard Decks' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/' },
        { hid: `og:description`, property: 'og:description', content: 'Hand-painted skate visionary and skate art on recycled skateboard decks. New life is given to these discarded toys by upcycling them into trendy wall art.' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: psychedelicBee_thumb }
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
