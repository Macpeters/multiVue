<template>
  <div>
    <imageList/>
  </div>
</template>

<script>
  // Images
  import blueFace_uv      from "../../assets/fineArtUv/macpeters_blueFace_uv.jpg";
  import cactusGuy_uv      from "../../assets/fineArtUv/macpeters_cactusGuy_uv.jpg";
  import colin_uv          from "../../assets/fineArtUv/macpeters_colin_uv.png";
  import dragonfly_01_uv    from "../../assets/fineArtUv/macpeters_dragonfly_01_uv.jpg";
  import dragonfly_02_uv    from "../../assets/fineArtUv/macpeters_dragonfly_02_uv.jpg";
  import dragonfly_03_uv    from "../../assets/fineArtUv/macpeters_dragonfly_03_uv.jpg";
  import greenEye_uv      from "../../assets/fineArtUv/macpeters_greenEye_uv.jpg";
  import motherAya_uv     from "../../assets/fineArtUv/macpeters_motherAya.jpg";
  import purpleEye_uv      from "../../assets/fineArtUv/macpeters_purpleEye_uv.jpg";
  import redEye_uv      from "../../assets/fineArtUv/macpeters_redEye_uv.jpg";
  import yellowEye_uv      from "../../assets/fineArtUv/macpeters_yellowEye_uv.jpg";
  // Thumbs
  import blueFace_uv_thumb     from "../../assets/fineArtUv/thumbnails/macpeters_blueFace_uv.jpg";
  import cactusGuy_uv_thumb     from "../../assets/fineArtUv/thumbnails/macpeters_cactusGuy_uv.jpg";
  import colin_uv_thumb          from "../../assets/fineArtUv/thumbnails/macpeters_colin_uv.png";
  import dragonfly_01_uv_thumb    from "../../assets/fineArtUv/thumbnails/macpeters_dragonfly_01_uv.jpg";
  import dragonfly_02_uv_thumb    from "../../assets/fineArtUv/thumbnails/macpeters_dragonfly_02_uv.jpg";
  import dragonfly_03_uv_thumb    from "../../assets/fineArtUv/thumbnails/macpeters_dragonfly_03_uv.jpg";
  import greenEye_uv_thumb      from "../../assets/fineArtUv/thumbnails/macpeters_greenEye_uv.jpg";
  import motherAya_uv_thumb     from "../../assets/fineArtUv/thumbnails/macpeters_motherAya.jpg";
  import purpleEye_uv_thumb      from "../../assets/fineArtUv/thumbnails/macpeters_purpleEye_uv.jpg";
  import redEye_uv_thumb      from "../../assets/fineArtUv/thumbnails/macpeters_redEye_uv.jpg";
  import yellowEye_uv_thumb      from "../../assets/fineArtUv/thumbnails/macpeters_yellowEye_uv.jpg";
  // Components
  import imageList    from '../../components/art/imageList.vue'

  const base_keywords = "painting, visionary, sci-fi, art, blacklight, uv reactive, psychedelic, psychedelic painting, fantasy, "

  export default {
    name: "SmallPaintingImages",
    components: { imageList },
    data() {
      return {
        images: [
          {
            image: colin_uv,
            thumb: colin_uv_thumb,
            title: "Colin",
            subtitle: "12x12 UV Acrylic on canvas",
            description: "A Memorial Portait",
            keywords: base_keywords + 'portait, memorial, in memorium'
          },
          {
            image: dragonfly_01_uv,
            thumb: dragonfly_01_uv_thumb,
            title: "Dragonfly 01",
            subtitle: "6x6 UV Acrylic on canvas",
            description: "First of my series of 3 dragonflies",
            keywords: base_keywords + 'insect, dragonfly, mosquito eater, wetland, nature, wildlife, marsh, bog, pond, swamp, shore'
          },
          {
            image: dragonfly_02_uv,
            thumb: dragonfly_02_uv_thumb,
            title: "Dragonfly 02",
            subtitle: "6x6 UV Acrylic on canvas",
            description: "Second of my series of 3 dragonflies",
            keywords: base_keywords + 'insect, dragonfly, mosquito eater, wetland, nature, wildlife, marsh, bog, pond, swamp, shore'
          },
          {
            image: dragonfly_03_uv,
            thumb: dragonfly_03_uv_thumb,
            title: "Dragonfly 03",
            subtitle: "6x6 UV Acrylic on canvas",
            description: "Third of my series of 3 dragonflies",
            keywords: base_keywords + 'insect, dragonfly, mosquito eater, wetland, nature, wildlife, marsh, bog, pond, swamp, shore'
          },
          {
            image: motherAya_uv,
            thumb: motherAya_uv_thumb,
            title: "Mother Aya",
            subtitle: "12x12 UV Acrylic on canvas",
            description: "She can show you the blinding light of pure love, or your sickness and rot, depending on what you need most",
            keywords: base_keywords + 'mother, ayahuasca, dmt, jungle, hummingbird, chacruna, ceremony'
          },
          {
            image: redEye_uv,
            thumb: redEye_uv_thumb,
            title: "Red Eye",
            subtitle: "6x6 UV Acrylic on canvas",
            description: "Empathetic and Humane - one of the 4 Teacher Spirits",
            keywords: base_keywords + 'red, eye, wisdom, ancient, god, human, civilized, touching'
          },
          {
            image: greenEye_uv,
            thumb: greenEye_uv_thumb,
            title: "Green Eye",
            subtitle: "6x6 UV Acrylic on canvas",
            description: "Wild and Furry - one of the 4 Teacher Spirits",
            keywords: base_keywords + 'green, eye, wisdom, ancient, god, furry, wild, cat, cats eye'
          },
          {
            image: purpleEye_uv,
            thumb: purpleEye_uv_thumb,
            title: "Purple Eye",
            subtitle: "6x6 UV Acrylic on canvas",
            description: "Cosmic and Explosive - one of the 4 Teacher Spirits",
            keywords: base_keywords + 'purple, eye, wisdom, ancient, god, cosmic, space, explosion'
          },
          {
            image: yellowEye_uv,
            thumb: yellowEye_uv_thumb,
            title: "Yellow Eye",
            subtitle: "6x6 UV Acrylic on canvas",
            description: "Reptilian and alien - one of the 4 Teacher Spirits",
            keywords: base_keywords + 'yellow, eye, wisdom, ancient, god, reptile, lizard, scales'
          },
          {
            image: blueFace_uv,
            thumb: blueFace_uv_thumb,
            title: "Warrior Girl",
            subtitle: "10x10 UV Acrylic on canvas",
            description: "Warrior heroine - powerful and brilliant defender or truth",
            keywords: base_keywords + 'orange hair, blue skin'
          },
          {
            image: cactusGuy_uv,
            thumb: cactusGuy_uv_thumb,
            title: "Cactus Guy",
            subtitle: "10x10 UV Acrylic on canvas",
            description: "A menacing figure with devious plans, or a coy fellow with an unusual appearance?",
            keywords: base_keywords + 'cactus, prick, prickly, green, plant, spiral, pointy teeth, toothy grin'
          }
        ],
        chosenImage: null,
      };
    }
  };
</script>

<style scoped></style>
