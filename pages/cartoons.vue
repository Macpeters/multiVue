<template>
  <div>
    <navBar />

    <h1>Macpeters: Cartoons and Comics</h1>
    <breadcrumbs/>

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

    <blogList/>

    <contactBar/>

  </div>
</template>

<script>
// images
import axylotl from "../assets/cartoons/macpeters_axylotl.png";
import blueTurtle from "../assets/cartoons/macpeters_blueturtle.png";
import canary from "../assets/cartoons/macpeters_canary.png";
import coq from "../assets/cartoons/macpeters_coquelicotBird.png"
import festivalFrog from "../assets/cartoons/macpeters_festivalfrog.png";
import gambogeFrog from "../assets/cartoons/macpeters_gambogeFrog.png";
import mallowSeahorse from "../assets/cartoons/macpeters_mallowSeahorse.png";
import mintCreamInsect from "../assets/cartoons/macpeters_mintcreamInsect.png";
import mu from "../assets/cartoons/macpeters_mu.png";
import sepiaFieldMouse from "../assets/cartoons/macpeters_sepiaFieldMouse.png";
import spock from "../assets/cartoons/macpeters_spock.png";
import ursula from "../assets/cartoons/macpeters_ursula.png";
import voldemort from "../assets/cartoons/macpeters_voldemort.png";
import wolfman from "../assets/cartoons/macpeters_wolfman.png";
import xenomorph from "../assets/cartoons/macpeters_xenomorph.png";
import yoda from "../assets/cartoons/macpeters_yoda.png";
import yzma from "../assets/cartoons/macpeters_yzma.png";
// Thumbnails
import axylotl_thumb from "../assets/cartoons/thumbnails/macpeters_axylotl.png";
import blueTurtle_thumb from "../assets/cartoons/thumbnails/macpeters_blueturtle.png";
import canary_thumb from "../assets/cartoons/thumbnails/macpeters_canary.png";
import coq_thumb from "../assets/cartoons/thumbnails/macpeters_coquelicotBird.png"
import festivalFrog_thumb from "../assets/cartoons/thumbnails/macpeters_festivalfrog.png";
import gambogeFrog_thumb from "../assets/cartoons/thumbnails/macpeters_gambogeFrog.png";
import mallowSeahorse_thumb from "../assets/cartoons/thumbnails/macpeters_mallowSeahorse.png";
import mintCreamInsect_thumb from "../assets/cartoons/thumbnails/macpeters_mintcreamInsect.png";
import mu_thumb from "../assets/cartoons/thumbnails/macpeters_mu.png";
import sepiaFieldMouse_thumb from "../assets/cartoons/thumbnails/macpeters_sepiaFieldMouse.png";
import spock_thumb from "../assets/cartoons/thumbnails/macpeters_spock.png";
import ursula_thumb from "../assets/cartoons/thumbnails/macpeters_ursula.png";
import voldemort_thumb from "../assets/cartoons/thumbnails/macpeters_voldemort.png";
import wolfman_thumb from "../assets/cartoons/thumbnails/macpeters_wolfman.png";
import xenomorph_thumb from "../assets/cartoons/thumbnails/macpeters_xenomorph.png";
import yoda_thumb from "../assets/cartoons/thumbnails/macpeters_yoda.png";
import yzma_thumb from "../assets/cartoons/thumbnails/macpeters_yzma.png";
// components
import imageList from '../components/imageList.vue'
import navBar from '../components/navBar.vue'
import contactBar from '../components/contactBar.vue'
import breadcrumbs from '../components/breadcrumbs.vue'
import blogList from '../components/blog.vue'

const base_keywords = "comic, funny, webcomic, cartoon, cartooning, digital art, ipad, autodesk, sketchbook, digital drawing, drawing, sketch, ";

export default {
  name: "Cartoons",
  components: { imageList, navBar, contactBar, breadcrumbs, blogList },
  data() {
    return {
      images: [
        {
          image: axylotl,
          thumb: axylotl_thumb,
          title: "Cherry Blossom Axylotle",
          description: "The Axylotle is staring into your soul.",
          keywords: base_keywords + "axylotl, underwater, cherry blossom pink, monochromatic art, color collective, colour study"
        },
        {
          image: blueTurtle,
          thumb: blueTurtle_thumb,
          title: "French Sky Blue Sea Turtle",
          description: "A little baby sea turtle made for colour collective: monochromatic",
          keywords: base_keywords + "turtle, sea turtle, sand, sky blue, monochromatic art, color collective, colour study"
        },
        {
          image: canary,
          thumb: canary_thumb,
          title: "Canary Yellow",
          description: "Just a little songbird - monochromatic.",
          keywords: base_keywords + "canary, songbird, yellow, yellow canary, monochromatic art, color collective, colour study"
        },
        {
          image: coq,
          thumb: coq_thumb,
          title: "Coquelicot Bird",
          description: "A little red songbird - monochromatic.",
          keywords: base_keywords + "coquelicot songbird, yellow, red bird, monochromatic art, color collective, colour study, red"
        },
        {
          image: gambogeFrog,
          thumb: gambogeFrog_thumb,
          title: "Gamboge Frog",
          description: "Monochromatic Frog",
          keywords: base_keywords + "frog, amphibian, mustard, colour collective, monochromatic"
        },
        {
          image: mallowSeahorse,
          thumb: mallowSeahorse_thumb,
          title: "Mallow Seahorse",
          description: "Monochromatic Seahorse in shades of purple",
          keywords: base_keywords + "seahorse, underwater, ocean life, sea creature, colour collective, purple"
        },
        {
          image: mintCreamInsect,
          thumb: mintCreamInsect_thumb,
          title: "Mint Cream Insect",
          description: "Monochromatic Flying Insect",
          keywords: base_keywords + "insect, invertibrate, flying insect, mint, green, off-white, nature, colour collective"
        },
        {
          image: sepiaFieldMouse,
          thumb: sepiaFieldMouse_thumb,
          title: "Sepia Fielf Mouse",
          description: "A furry mouse caught by surprise",
          keywords: base_keywords + "mouse, rodent, sepia, brown, monochromatic, small creatures, furry critter, cute animal, tiny animal"
        },
        {
          image: festivalFrog,
          thumb: festivalFrog_thumb,
          title: "Festival Frog",
          description: "This frog hearts music festivals.",
          keywords: base_keywords + "festival, music festival, edm, heart, hand heart, frog, plur"
        },
        {
          image: mu,
          thumb: mu_thumb,
          title: "Mu",
          description: "Sassy Cow refuses to get dragged into a fight.",
          keywords: base_keywords + "sassy, cow, beef, no beef, pacifist, vegan, vegetarian, no war, plur"
        },
        {
          image: spock,
          thumb: spock_thumb,
          title: "Spock",
          description: "Mr Spock, the vulcan",
          keywords: base_keywords + "star trek, vulcan, spock, live long and prosper, next generation"
        },
        {
          image: ursula,
          thumb: ursula_thumb,
          title: "Ursula",
          description: "Ursula reimagined.",
          keywords: base_keywords + "ariel, disney, ursula, little mermaid, sea witch, villain, cecaelian, animal alphabets, movie character"
        },
        {
          image: voldemort,
          thumb: voldemort_thumb,
          title: "Voldemort",
          description: "Voldemort isn't best friends with Harry Potter, for some reason.",
          keywords: base_keywords + "voldemort, harry potter, slytherin, gryphindor, hufflepuff, magic, wizardry, hogwarts, snake, parseltongue, petulant, pouty, he-who-must-not-be-named, fan art, animal alphabets"
        },
        {
          image: wolfman,
          thumb: wolfman_thumb,
          title: "Wolfman",
          description: "The wolfman is now more accepting of his whole self.",
          keywords: base_keywords + "wolfman, fright night, frightenstein, film character, werewolf, bela lugosi, cross-dressing, pretty man, beast man, beast, wolf, flirty, fan art, animal alphabets"  
        },
        {
          image: xenomorph,
          thumb: xenomorph_thumb,
          title: "Xenomorph",
          description: "Always fashionable in her... um...  insect armour exoskeleton",
          keywords: base_keywords + "xenomorph, alien, aliens, giger, film character, horror, thriller, insect, exoskeleton, species, cyborg, extraterrestrial, movie monster, creatures"
        },
        {
          image: yoda,
          thumb: yoda_thumb,
          title: "Yoda",
          description: "Train yourself to let go of everything you fear to lose",
          keywords: base_keywords + "yoda, star wars, jedi, lightsaber, discipline, wisdom"
        },
        {
          image: yzma,
          thumb: yzma_thumb,
          title: "Yzma",
          description: "She didn't get the experience of a feel good adventure and a new friend, so she stayed a villain.",
          keywords: base_keywords + "yzma, emperors new groove, disney, reimagined, villain, animal alphabets"
        }
      ],
      breadcrumbs: [
        { link: '/',  name: 'Home' },
        { link: '/art', name: 'Art' },
        { link: '/art', name: 'Cartoons' }
      ],
      blogFilter: 'improvingAtArt',
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
