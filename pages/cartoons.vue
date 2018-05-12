<template>
  <div>
    <navBar />

    <h1>Macpeters: Cartoons and Comics</h1>

    <div class="page-description">
      <h2>Creativity and Drawing Fundamentals</h2>
      <p>
        I've started drawing a lot of cartoons - quick sketches are awesome practice, and I think there's
        a lot of value in exploring the absurdities of the animated world.  Realism is overshadowed by
        expression, which helps push the boundaries of creativity.  Boiling an idea down to its
        simplist expression is deceptively difficult - there are fewer lines, but those lines have to
        be on point.  So cartooning gives me a lighter, more humourous medium within which I can work
        on fundamental drawing skills while breaking down creative barriers.
      </p>
      
    </div>

    <imageList/>

    <contactBar/>

  </div>
</template>

<script>
// images
import axylotl from "../assets/cartoons/macpeters_axylotl.png";
import blueTurtle from "../assets/cartoons/macpeters_blueturtle.png";
import canary from "../assets/cartoons/macpeters_canary.png";
import festivalFrog from "../assets/cartoons/macpeters_festivalfrog.png";
import mu from "../assets/cartoons/macpeters_mu.png";
import spock from "../assets/cartoons/macpeters_spock.png";
import ursula from "../assets/cartoons/macpeters_ursula.png";
import voldemort from "../assets/cartoons/macpeters_voldemort.png";
import wolfman from "../assets/cartoons/macpeters_wolfman.png";
import xenomorph from "../assets/cartoons/macpeters_xenomorph.png";
import yoda from "../assets/cartoons/macpeters_yoda.png";
import yzma from "../assets/cartoons/macpeters_yzma.png";
// components
import imageList from '../components/imageList.vue'
import navBar from '../components/navBar.vue'
import contactBar from '../components/contactBar.vue'

const base_keywords = "comic, funny, webcomic, cartoon, cartooning, digital art, ipad, autodesk, sketchbook, digital drawing, drawing, sketch, ";

export default {
  name: "Cartoons",
  components: { imageList, navBar, contactBar },
  data() {
    return {
      images: [
        {
          image: axylotl,
          title: "Cherry Blossom Axylotle",
          description: "The Axylotle is staring into your soul.",
          keywords: base_keywords + "axylotl, underwater, cherry blossom pink, monochromatic art, color collective, colour study"
        },
        {
          image: blueTurtle,
          title: "French Sky Blue Sea Turtle",
          description: "A little baby sea turtle made for colour collective: monochromatic",
          keywords: base_keywords + "turtle, sea turtle, sand, sky blue, monochromatic art, color collective, colour study"
        },
        {
          image: canary,
          title: "Canary Yellow",
          description: "Just a little songbird - monochromatic.",
          keywords: base_keywords + "canary, songbird, yellow, yellow canary, monochromatic art, color collective, colour study"
        },
        {
          image: festivalFrog,
          title: "Festival Frog",
          description: "This frog hearts music festivals.",
          keywords: base_keywords + "festival, music festival, edm, heart, hand heart, frog, plur"
        },
        {
          image: mu,
          title: "Mu",
          description: "Sassy Cow refuses to get dragged into a fight.",
          keywords: base_keywords + "sassy, cow, beef, no beef, pacifist, vegan, vegetarian, no war, plur"
        },
        {
          image: spock,
          title: "Spock",
          description: "Mr Spock, the vulcan",
          keywords: base_keywords + "star trek, vulcan, spock, live long and prosper, next generation"
        },
        {
          image: ursula,
          title: "Ursula",
          description: "Ursula reimagined.",
          keywords: base_keywords + "ariel, disney, ursula, little mermaid, sea witch, villain, cecaelian, animal alphabets, movie character"
        },
        {
          image: voldemort,
          title: "Voldemort",
          description: "Voldemort isn't best friends with Harry Potter, for some reason.",
          keywords: base_keywords + "voldemort, harry potter, slytherin, gryphindor, hufflepuff, magic, wizardry, hogwarts, snake, parseltongue, petulant, pouty, he-who-must-not-be-named, fan art, animal alphabets"
        },
        {
          image: wolfman,
          title: "Wolfman",
          description: "The wolfman is now more accepting of his whole self.",
          keywords: base_keywords + "wolfman, fright night, frightenstein, film character, werewolf, bela lugosi, cross-dressing, pretty man, beast man, beast, wolf, flirty, fan art, animal alphabets"  
        },
        {
          image: xenomorph,
          title: "Xenomorph",
          description: "Always fashionable in her... um...  insect armour exoskeleton",
          keywords: base_keywords + "xenomorph, alien, aliens, giger, film character, horror, thriller, insect, exoskeleton, species, cyborg, extraterrestrial, movie monster, creatures"
        },
        {
          image: yoda,
          title: "Yoda",
          description: "Train yourself to let go of everything you fear to lose",
          keywords: base_keywords + "yoda, star wars, jedi, lightsaber, discipline, wisdom"
        },
        {
          image: yzma,
          title: "Yzma",
          description: "She didn't get the experience of a feel good adventure and a new friend, so she stayed a villain.",
          keywords: base_keywords + "yzma, emperors new groove, disney, reimagined, villain, animal alphabets"
        }
      ],
      chosenImage: null
    };
  },
  head () {
    return {
      title: "Macpeters Cartoons and Comics",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: 'ZxmnP8EXJRjiayUi1MzTxW0p9D' },
        { hid: 'comicDescription', name: 'description', content: 'Whimsical, dry humour cartoons using minimal colours'},
        { hid: 'comicAuthor', name: 'author', content: 'Mac Peters'},
        { hid: `og:title`, property: 'og:title', content: 'Macpeters Cartoons and Comics' },
        { hid: `og:url`, property: 'og:url', content: 'https://macpeters-vue.netlify.com/cartoons/' },
        { hid: `og:description`, property: 'og:description', content: 'Whimsical, dry humour cartoons using minimal colours' },
        { hid: `og:type`, property: 'og:type', content: 'website' },
        { hid: `og:image`, property: 'og:image', content: festivalFrog }
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
