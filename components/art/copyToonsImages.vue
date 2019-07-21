<template>
  <div>
    <imageList/>
  </div>
</template>

<script>
// images
import renAndStimpy       from "../../assets/cartoons/copyToons/macpeters_01_renAndStimpyStudy.png";
import tinyToons       from "../../assets/cartoons/copyToons/macpeters_02_tinyToonsStudy.png";
import animaniacs       from "../../assets/cartoons/copyToons/macpeters_03_animaniacsStudy.png";
import simpsons       from "../../assets/cartoons/copyToons/macpeters_04_simpsonsStudy.png";
import rugrats       from "../../assets/cartoons/copyToons/macpeters_05_rugratsStudy.png";
import bimbo       from "../../assets/cartoons/copyToons/macpeters_06_bimbosInitiationStudy.png";

// Thumbnails
import renAndStimpy_thumb  from "../../assets/cartoons/copyToons/thumbnails/macpeters_01_renAndStimpyStudy.png";
import tinyToons_thumb  from "../../assets/cartoons/copyToons/thumbnails/macpeters_02_tinyToonsStudy.png";
import animaniacs_thumb  from "../../assets/cartoons/copyToons/thumbnails/macpeters_03_animaniacsStudy.png";
import simpsons_thumb  from "../../assets/cartoons/copyToons/thumbnails/macpeters_04_simpsonsStudy.png";
import rugrats_thumb  from "../../assets/cartoons/copyToons/thumbnails/macpeters_05_rugratsStudy.png";
import bimbo_thumb       from "../../assets/cartoons/copyToons/thumbnails/macpeters_06_bimbosInitiationStudy.png";


// components
import imageList from '../../components/art/imageList.vue'

const base_keywords = "cartoon, cartooning, digital art, toon, ";

export default {
  name: "Draw9",
  components: { imageList },
  data() {
    return {
      images: [
        {
          image: bimbo,
          thumb: bimbo_thumb,
          title: "Bimbo's Initiation",
          description: "There was only the one character here, so my creation just looks like a lady cat version of Bimbo.",
          keywords: base_keywords + "old school cartoons, black and white cartoon, psychedelic, masonic secret society"
        },
        {
          image: rugrats,
          thumb: rugrats_thumb,
          title: "Rugrats",
          description: "I drew Tommy and Angelica, then created a kid who is aged in between the two",
          keywords: base_keywords + "rugrats"
        },
        {
          image: simpsons,
          thumb: simpsons_thumb,
          title: "Simpsons",
          description: "Bart, Lisa, and me as a simpsons character",
          keywords: base_keywords + "simspons, yellow"
        },
        {
          image: animaniacs,
          thumb: animaniacs_thumb,
          title: "Animaniacs",
          description: "There is such a range of characters in that show, but I choose the rat duo, for this one.  Pinky, the Brain, and some angry troublemaker rat",
          keywords: base_keywords + "animaniacs, pinky and the brain, take over the world, genius, insane"
        },
        {
          image: tinyToons,
          thumb: tinyToons_thumb,
          title: "Tiny Toons",
          description: "Plucky Duck, Babs Bunny, and my own Chippy the Squirrel. ",
          keywords: base_keywords + "tiny toons, baby loony toons, squirrel, rabbit, duck"
        },
        {
          image: renAndStimpy,
          thumb: renAndStimpy_thumb,
          title: "Ren and Stimpy",
          description: "The character's colours vary wildly, and they are super expressive and dynamic. I added a mean rat to the cat/dog duo",
          keywords: base_keywords + "ren, stimpy, rat, lowbrow, twisted"
        }
      ],
      chosenImage: null
    };
  }
};
</script>

<style scoped>

</style>
