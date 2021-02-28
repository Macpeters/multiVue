<template>
  <div>
    <imageList/>
  </div>
</template>

<script>
  // Images
  import blueFace     from "../../assets/fineArt/macpeters_blueFace.jpg";
  import cactusCuy    from "../../assets/fineArt/macpeters_cactusGuy.jpg";
  import colin        from "../../assets/fineArt/macpeters_colin.png";
  import dragonfly_01    from "../../assets/fineArt/macpeters_dragonfly_01.jpg";
  import dragonfly_02    from "../../assets/fineArt/macpeters_dragonfly_02.jpg";
  import dragonfly_03    from "../../assets/fineArt/macpeters_dragonfly_03.jpg";
  import greenEye     from "../../assets/fineArt/macpeters_greenEye.jpg";
  import lovebird     from "../../assets/fineArt/macpeters_loveBird.png";
  import motherAya     from "../../assets/fineArt/macpeters_motherAya.jpg";
  import purpleEye     from "../../assets/fineArt/macpeters_purpleEye.jpg";
  import redEye     from "../../assets/fineArt/macpeters_redEye.jpg";
  import starbird     from "../../assets/fineArt/macpeters_starBird.png";
  import yellowEye     from "../../assets/fineArt/macpeters_yellowEye.jpg";

  // Thumbs
  import blueFace_thumb      from "../../assets/fineArt/thumbnails/macpeters_blueFace.png";
  import cactusCuy_thumb     from "../../assets/fineArt/thumbnails/macpeters_cactusGuy.png";
  import colin_thumb         from "../../assets/fineArt/thumbnails/macpeters_colin.png";
  import dragonfly_01_thumb    from "../../assets/fineArt/thumbnails/macpeters_dragonfly_01.jpg";
  import dragonfly_02_thumb    from "../../assets/fineArt/thumbnails/macpeters_dragonfly_02.jpg";
  import dragonfly_03_thumb    from "../../assets/fineArt/thumbnails/macpeters_dragonfly_03.jpg";
  import greenEye_thumb     from "../../assets/fineArt/thumbnails/macpeters_greenEye.jpg";
  import lovebird_thumb     from "../../assets/fineArt/thumbnails/macpeters_loveBird.png";
  import motherAya_thumb     from "../../assets/fineArt/thumbnails/macpeters_motherAya.jpg";
  import purpleEye_thumb     from "../../assets/fineArt/thumbnails/macpeters_purpleEye.jpg";
  import redEye_thumb     from "../../assets/fineArt/thumbnails/macpeters_redEye.jpg";
  import starbird_thumb     from "../../assets/fineArt/thumbnails/macpeters_starBird.png";
  import yellowEye_thumb     from "../../assets/fineArt/thumbnails/macpeters_yellowEye.jpg";
  // Components
  import imageList    from '../../components/art/imageList.vue'

  const base_keywords = "painting, visionary, sci-fi, art, blacklight, uv reactive, psychedelic, psychedelic painting, fantasy, "

  export default {
    name: "SmallPaintings",
    components: { imageList},
    data() {
      return {
        images: [
          {
            image: colin,
            thumb: colin_thumb,
            title: "Colin",
            subtitle: "12x12 UV Acrylic on canvas",
            description: "A Memorial Portait",
            keywords: base_keywords + 'portait, memorial, in memorium'
          },
          {
            image: dragonfly_01,
            thumb: dragonfly_01_thumb,
            title: "Dragonfly 01",
            subtitle: "6x6 UV Acrylic on canvas",
            description: "First of my series of 3 dragonflies",
            keywords: base_keywords + 'insect, dragonfly, mosquito eater, wetland, nature, wildlife, marsh, bog, pond, swamp, shore'
          },
          {
            image: dragonfly_02,
            thumb: dragonfly_02_thumb,
            title: "Dragonfly 02",
            subtitle: "6x6 UV Acrylic on canvas",
            description: "Second of my series of 3 dragonflies",
            keywords: base_keywords + 'insect, dragonfly, mosquito eater, wetland, nature, wildlife, marsh, bog, pond, swamp, shore'
          },
          {
            image: dragonfly_03,
            thumb: dragonfly_03_thumb,
            title: "Dragonfly 03",
            subtitle: "6x6 UV Acrylic on canvas",
            description: "Third of my series of 3 dragonflies",
            keywords: base_keywords + 'insect, dragonfly, mosquito eater, wetland, nature, wildlife, marsh, bog, pond, swamp, shore'
          },
          {
            image: motherAya,
            thumb: motherAya_thumb,
            title: "Mother Aya",
            subtitle: "12x12 UV Acrylic on canvas",
            description: "She can show you the blinding light of pure love, or your sickness and rot, depending on what you need most",
            keywords: base_keywords + 'mother, ayahuasca, dmt, jungle, hummingbird, chacruna, ceremony'
          },
          {
            image: redEye,
            thumb: redEye_thumb,
            title: "Red Eye",
            subtitle: "6x6 UV Acrylic on canvas",
            description: "Empathetic and Humane - one of the 4 Teacher Spirits",
            keywords: base_keywords + 'red, eye, wisdom, ancient, god, human, civilized, touching'
          },
          {
            image: greenEye,
            thumb: greenEye_thumb,
            title: "Green Eye",
            subtitle: "6x6 UV Acrylic on canvas",
            description: "Wild and Furry - one of the 4 Teacher Spirits",
            keywords: base_keywords + 'green, eye, wisdom, ancient, god, furry, wild, cat, cats eye'
          },
          {
            image: purpleEye,
            thumb: purpleEye_thumb,
            title: "Purple Eye",
            subtitle: "6x6 UV Acrylic on canvas",
            description: "Cosmic and Explosive - one of the 4 Teacher Spirits",
            keywords: base_keywords + 'purple, eye, wisdom, ancient, god, cosmic, space, explosion'
          },
          {
            image: yellowEye,
            thumb: yellowEye_thumb,
            title: "Yellow Eye",
            subtitle: "6x6 UV Acrylic on canvas",
            description: "Reptilian and Alien - one of the 4 Teacher Spirits",
            keywords: base_keywords + 'yellow, eye, wisdom, ancient, god, reptile, lizard, scales'
          },
          {
            image: blueFace,
            thumb: blueFace_thumb,
            title: "Warrior Girl",
            subtitle: "10x10 UV Acrylic on canvas",
            description: "Warrior heroine - powerful and brilliant defender or truth",
            keywords: base_keywords + 'orange hair, blue skin'
          },
          {
            image: cactusCuy,
            thumb: cactusCuy_thumb,
            title: "Cactus Guy",
            subtitle: "10x10 UV Acrylic on canvas",
            description: "A menacing figure with devious plans, or a coy fellow with an unusual appearance?",
            keywords: base_keywords + 'cactus, prick, prickly, green, plant, spiral, pointy teeth, toothy grin'
          },
          {
            image: lovebird,
            thumb: lovebird_thumb,
            title: "Love Bird",
            subtitle: "12x12 UV Acrylic on canvas",
            description: "Real Love persists when passion cools, and wants nothing in return.",
            keywords: base_keywords + "bird, moon, feeling love, heart, warm feelings, warm glow, receiving love, enjoying love, floating, love of the heart"
          },
          {
            image: starbird,
            thumb: starbird_thumb,
            title: "Star Bird",
            subtitle: "12x12 UV Acrylic on canvas",
            description: "Shooting through space, Star Bird is just enjoying the journey for what it is and sharing that enjoyment freely",
            keywords: base_keywords + "bird, star, crystal, shard, heart, soaring, enjoyment, life, space, giving love, enjoying love, flight, love of the universe"
          }
        ],
        chosenImage: null,
      };
    }
  };
</script>

<style scoped></style>
