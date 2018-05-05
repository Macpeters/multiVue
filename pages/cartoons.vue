<template>
  <div>
    <navBar />

    <h1>Macpeters: Cartoons and Comics</h1>

    <div class="page-description">
      I've started drawing a lot of cartoons - quick sketches are awesome practice, and I think there's
      a lot of value in exploring the absurdities of the animated world.  Realism is overshadowed by
      expression, which helps push the boundaries of creativity.  Boiling an idea down to its
      simplist expression is deceptively difficult - there are fewer lines, but those lines have to
      be on point.  So cartooning gives me a lighter, more humourous medium within which I can work
      on fundamental drawing skills while breaking down creative barriers.
    </div>

    <imageList/>

  </div>
</template>

<script>
// images
import canary from "../assets/cartoons/macpeters_canary.png";
import festivalFrog from "../assets/cartoons/macpeters_festivalfrog.png";
import mu from "../assets/cartoons/macpeters_mu.png";
import ursula from "../assets/cartoons/macpeters_ursula.png";
import voldemort from "../assets/cartoons/macpeters_voldemort.png";
import wolfman from "../assets/cartoons/macpeters_wolfman.png";
import xenomorph from "../assets/cartoons/macpeters_xenomorph.png";
// components
import imageList from '../components/imageList.vue'
import navBar from '../components/navBar.vue'

const base_keywords = "skateboards, skate art, skateboard art, painted decks, lowbrow, street art, recycled skateboards, sk8, skater, custom deck, psychedelic, visionary, ";

export default {
  name: "Cartoons",
  components: { imageList, navBar },
  data() {
    return {
      images: [
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
        }
      ],
      chosenImage: null
    };
  },
  build: {
    assetsPublicPath: "/",
    assetsSubDirectory: "assets"
  }
};
</script>

<style scoped>

  div {
    text-align: center
  }

</style>
