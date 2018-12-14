<template>
  <div>
    <imageList/>
  </div>
</template>

<script>
// images
import landscapes_01    from "../../assets/cartoons/macpeters_landscapes_01.png";
import portraits_01     from "../../assets/cartoons/macpeters_portraits_01.png";
import colourGroup_01   from "../../assets/cartoons/macpeters_colourGroup_01.png";
import festivalFrog     from "../../assets/cartoons/macpeters_festivalfrog.png";
import mu               from "../../assets/cartoons/macpeters_mu.png";
import spock            from "../../assets/cartoons/macpeters_spock.png";
import ursula           from "../../assets/cartoons/macpeters_ursula.png";
import voldemort        from "../../assets/cartoons/macpeters_voldemort.png";
import wolfman          from "../../assets/cartoons/macpeters_wolfman.png";
import xenomorph        from "../../assets/cartoons/macpeters_xenomorph.png";
import yoda             from "../../assets/cartoons/macpeters_yoda.png";
import yzma             from "../../assets/cartoons/macpeters_yzma.png";
// Thumbnails
import landscapes_01_thumb  from "../../assets/cartoons/thumbnails/macpeters_landscapes_01.png";
import portraits_01_thumb   from "../../assets/cartoons/thumbnails/macpeters_portraits_01.png";
import colourGroup_01_thumb from "../../assets/cartoons/thumbnails/macpeters_colourGroup_01.png";
import festivalFrog_thumb   from "../../assets/cartoons/thumbnails/macpeters_festivalfrog.png";
import mu_thumb             from "../../assets/cartoons/thumbnails/macpeters_mu.png";
import spock_thumb          from "../../assets/cartoons/thumbnails/macpeters_spock.png";
import ursula_thumb         from "../../assets/cartoons/thumbnails/macpeters_ursula.png";
import voldemort_thumb      from "../../assets/cartoons/thumbnails/macpeters_voldemort.png";
import wolfman_thumb        from "../../assets/cartoons/thumbnails/macpeters_wolfman.png";
import xenomorph_thumb      from "../../assets/cartoons/thumbnails/macpeters_xenomorph.png";
import yoda_thumb           from "../../assets/cartoons/thumbnails/macpeters_yoda.png";
import yzma_thumb           from "../../assets/cartoons/thumbnails/macpeters_yzma.png";
// components
import imageList from '../../components/art/imageList.vue'

const base_keywords = "cartoon, cartooning, digital art, ipad, autodesk, sketchbook, digital drawing, drawing, sketch, ";

export default {
  name: "Cartoons",
  components: { imageList },
  data() {
    return {
      images: [
        {
          image: landscapes_01,
          thumb: landscapes_01_thumb,
          title: "Landscape Studies",
          description: "A selection of landscapes - I'm trying to timebox these so as not to get lost in the details.  The focus is on colour, value, and composition",
          keywords: base_keywords + "landscape, sunset, grass, water, lake, pond, lillypad, waterlilly, rocky shoreline, cottage, autumn"
        },
        {
          image: portraits_01,
          thumb: portraits_01_thumb,
          title: "Portrait Studies",
          description: "A selection of portaits - I'm trying to timebox these so as not to get lost in the details",
          keywords: base_keywords + "portrait, child, face, different angles, purple lighting, daylight"
        },
        {
          image: colourGroup_01,
          thumb: colourGroup_01_thumb,
          title: "Colour Collective",
          description: "A collection of images created for the #colourCollective weekly drawing challenge on Twitter",
          keywords: base_keywords + "coquelicot bird, cherry blossom axylotl, cherry blossom pig, basalt grey elephant, canary yellow, cornflower blue butterfly dioxazine maroon bettafish, french sky blue turtle, gamboge frog, mallow seahorse, mint cream insect, seashell wolly aphid, sepia field mouse, sunshine banana, teal blue jellyfish, vanilla cockatiel, monochromatic"
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
      chosenImage: null
    };
  }
};
</script>

<style scoped>

</style>
