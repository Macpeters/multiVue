<template>
  <div>
    <imageList/>
  </div>
</template>

<script>
// images
import portraits_01       from "../../assets/cartoons/draw9/macpeters_draw9_01_portraits.png";
import landscapes_01       from "../../assets/cartoons/draw9/macpeters_draw9_02_landscapes.png";
import lights_01       from "../../assets/cartoons/draw9/macpeters_draw9_03_lights.png";
import lights_02       from "../../assets/cartoons/draw9/macpeters_draw9_04_lights.png";
import darkSkinnedLadies       from "../../assets/cartoons/draw9/macpeters_draw9_05_darkSkinnedLadies.png";

// Thumbnails
import portraits_01_thumb  from "../../assets/cartoons/draw9/thumbnails/macpeters_draw9_01_portraits.png";
import landscapes_01_thumb  from "../../assets/cartoons/draw9/thumbnails/macpeters_draw9_02_landscapes.png";
import lights_01_thumb  from "../../assets/cartoons/draw9/thumbnails/macpeters_draw9_03_lights.png";
import lights_02_thumb  from "../../assets/cartoons/draw9/thumbnails/macpeters_draw9_04_lights.png";
import darkSkinnedLadies_thumb  from "../../assets/cartoons/draw9/thumbnails/macpeters_draw9_05_darkSkinnedLadies.png";


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
