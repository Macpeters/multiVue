<template>
  <div>
    <imageList/>
  </div>
</template>

<script>
// images
import goats            from "../../assets/cartoons/draw9/macpeters_draw9_08_goats.png";
import mice             from "../../assets/cartoons/draw9/macpeters_draw9_09_mice.png";

import portraits_01             from "../../assets/cartoons/draw9/macpeters_draw9_01_portraits.png";
import landscapes_01            from "../../assets/cartoons/draw9/macpeters_draw9_02_landscapes.png";
import lights_01                from "../../assets/cartoons/draw9/macpeters_draw9_03_lights.png";
import lights_02                from "../../assets/cartoons/draw9/macpeters_draw9_04_lights.png";
import darkSkinnedLadies        from "../../assets/cartoons/draw9/macpeters_draw9_05_darkSkinnedLadies.png";
import babies                   from "../../assets/cartoons/draw9/macpeters_draw9_06_babies.png";
import toddlers                 from "../../assets/cartoons/draw9/macpeters_draw9_07_toddlers.png";

// Thumbnails
import mice_thumb                   from "../../assets/cartoons/draw9/thumbnails/macpeters_draw9_09_mice.png";
import goats_thumb                  from "../../assets/cartoons/draw9/thumbnails/macpeters_draw9_08_goats.png";

import portraits_01_thumb           from "../../assets/cartoons/draw9/thumbnails/macpeters_draw9_01_portraits.png";
import landscapes_01_thumb          from "../../assets/cartoons/draw9/thumbnails/macpeters_draw9_02_landscapes.png";
import lights_01_thumb              from "../../assets/cartoons/draw9/thumbnails/macpeters_draw9_03_lights.png";
import lights_02_thumb              from "../../assets/cartoons/draw9/thumbnails/macpeters_draw9_04_lights.png";
import darkSkinnedLadies_thumb      from "../../assets/cartoons/draw9/thumbnails/macpeters_draw9_05_darkSkinnedLadies.png";
import babies_thumb                 from "../../assets/cartoons/draw9/thumbnails/macpeters_draw9_06_babies.png";
import toddlers_thumb               from "../../assets/cartoons/draw9/thumbnails/macpeters_draw9_07_toddlers.png";

// components
import imageList from '../../components/art/imageList.vue'

const base_keywords = "cartoon, cartooning, digital art, cat, toon, kitty, ";

export default {
  name: "Draw9",
  components: { imageList },
  data() {
    return {
      images: [
        {
          image: mice,
          thumb: mice_thumb,
          title: "Draw 9 Mice",
          description: "These guys are surprisingly easy to draw - they're basically just furry blobs with little hands",
          keywords: base_keywords + "rat, mouse, mice, squeaker, cheese bandit, white, grey, brown"
        },
        {
          image: goats,
          thumb: goats_thumb,
          title: "Draw 9 Goats",
          description: "Goats are harder to draw than I expected - I think I need to draw more hooved beasties for practice",
          keywords: base_keywords + "goat, head-butter, kids, jumping, balancing, billy, nanny, mountain"
        },
        {
          image: toddlers,
          thumb: toddlers_thumb,
          title: "Draw 9 Toddlers",
          description: "Continued practice with children, but a slightly older age group - toddlers.  Trying to nail down the cuteness factor.",
          keywords: base_keywords + "children, kids, toddlers, adorable, yawning, smiling, poc, representation, diverse, big eyes, different expressions"
        },
        {
          image: babies,
          thumb: babies_thumb,
          title: "Draw 9 Babies",
          description: "Children and babies in particular have very different proportions than adults",
          keywords: base_keywords + "babies, infants, newborn, sleepy, yawning, smiling, poc, representation, diverse"
        },
        {
          image: darkSkinnedLadies,
          thumb: darkSkinnedLadies_thumb,
          title: "Draw 9 Dark Skinned Ladies",
          description: "I'll be able to study a wider range of faces if I break people up into subsets, and focus on the ones I've had less practice with. Here are some famous ladies with darker skin",
          keywords: base_keywords + "Whoopie Goldberg, Kerry Washington, Logan Browning, Danielle Brooks, Samira Wiley, Gina Torress"
        },
        {
          image: lights_02,
          thumb: lights_02_thumb,
          title: "Draw 9 Lights",
          description: "Light is in all we see, but these lights drawings focus on the lights themselves, and how they reflect in their environment",
          keywords: base_keywords + "Rainy streets, reflective leather, smoke plumes, neon sign, streetcar tracks, reflective metal"
        },
        {
          image: lights_01,
          thumb: lights_01_thumb,
          title: "Draw 9 Lights",
          description: "Light is in all we see, but these lights drawings focus on the lights themselves, and how they reflect in their environment",
          keywords: base_keywords + "sparkler, wall lamp, candle, fireworks, christmas lights, streetlights"
        },
        {
          image: landscapes_01,
          thumb: landscapes_01_thumb,
          title: "Draw 9 Landscapes",
          description: "Nature landscapes - sky, water, earth",
          keywords: base_keywords + "lakes, rivers, ponds, fields, beach, shoreline, lillypads, sunset, cottage, nature, wilderness"
        },
        {
          image: portraits_01,
          thumb: portraits_01_thumb,
          title: "Draw 9 Portraits",
          description: "9 random portraits",
          keywords: base_keywords + "portraits, faces, people, kids, women, men"
        }
      ],
      chosenImage: null
    };
  }
};
</script>

<style scoped>

</style>
