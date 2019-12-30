<template>
  <div>
    <imageList/>
  </div>
</template>

<script>
// images
import ratBastard             from "../../assets/cartoons/ratBastard/macpeters_thatRatBastard.png";

// Thumbnails
import ratBastard_thumb       from "../../assets/cartoons/ratBastard/thumbnails/macpeters_thatRatBastard.png";

// components
import imageList from '../../components/art/imageList.vue'

const base_keywords = "cartoon, cartooning, digital art, rat, bastard, jerk, ";

export default {
  name: "ThatRatBastard",
  components: { imageList },
  data() {
    return {
      images: [
        {
          image: ratBastard,
          thumb: ratBastard_thumb,
          title: "That Rat Bastard",
          description: "16 drawings of That Rat Bastard",
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
