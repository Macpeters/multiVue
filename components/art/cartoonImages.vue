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
import catober_01       from "../../assets/cartoons/macpeters_catober_01.png";
import catober_02       from "../../assets/cartoons/macpeters_catober_02.png";
import extinct_alph_01       from "../../assets/cartoons/macpeters_animalAlph_extinct_01.png";
import extinct_alph_02       from "../../assets/cartoons/macpeters_animalAlph_extinct_02.png";
import extinct_alph_03       from "../../assets/cartoons/macpeters_animalAlph_extinct_03.png";

// Thumbnails
import landscapes_01_thumb    from "../../assets/cartoons/thumbnails/macpeters_landscapes_01.png";
import portraits_01_thumb     from "../../assets/cartoons/thumbnails/macpeters_portraits_01.png";
import colourGroup_01_thumb   from "../../assets/cartoons/thumbnails/macpeters_colourGroup_01.png";
import catober_01_thumb       from "../../assets/cartoons/thumbnails/macpeters_catober_01.png";
import catober_02_thumb       from "../../assets/cartoons/thumbnails/macpeters_catober_02.png";
import extinct_alph_01_thumb  from "../../assets/cartoons/macpeters_animalAlph_extinct_01.png";
import extinct_alph_02_thumb  from "../../assets/cartoons/macpeters_animalAlph_extinct_02.png";
import extinct_alph_03_thumb  from "../../assets/cartoons/macpeters_animalAlph_extinct_03.png";

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
          image: catober_02,
          thumb: catober_02_thumb,
          title: "31 Days of Cats Challenge - part 2",
          description: "For the month of October, I drew a cat a day, based on the Drawtober prompts",
          keywords: base_keywords + "cats, drawtober, catober, stuffy, twisted horns, cauldron, baku, queen, halloween, jester, demagorgon"
        },
        {
          image: catober_01,
          thumb: catober_01_thumb,
          title: "31 Days of Cats Challenge - part 1",
          description: "For the month of October, I drew a cat a day, based on the Drawtober prompts",
          keywords: base_keywords + "cats, drawtober, catober, pumpkin, frog, witch, skeleton, ghosts, scaredy cat, zombie, mummy, harry potter"
        },
        {
          image: extinct_alph_01,
          thumb: extinct_alph_01_thumb,
          title: "Animal Alphabets - Extinct Series part 1",
          description: "One extinct animal for every letter of the alphabet.  Prompts by AnimalAlphabets (twitter)",
          keywords: base_keywords + "alvarezsaurus, boreaspis, ceratogaulus, dakosaurus, einiosaurus, feilongus, glyptodon, hesperornis, ianthasuarus"
        },
        {
          image: extinct_alph_02,
          thumb: extinct_alph_02_thumb,
          title: "Animal Alphabets - Extinct Series part 2",
          description: "One extinct animal for every letter of the alphabet.  Prompts by AnimalAlphabets (twitter)",
          keywords: base_keywords + "jaekelopterus, kryptops, lambesosaurus, mammoth, nigersaurus, orohippus, paraphysornis, quetzalcoatlus, rhynchosaurus"
        },
        {
          image: extinct_alph_03,
          thumb: extinct_alph_03_thumb,
          title: "Animal Alphabets - Extinct Series part 3",
          description: "One extinct animal for every letter of the alphabet.  Prompts by AnimalAlphabets (twitter)",
          keywords: base_keywords + "sabre tooth tiger, tyranosaurus, udanoceratops, velocaraptor, wooly rhinocerous, xinjiangtitan, yukon giant camel, zalmoxes"
        },
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
        }
      ],
      chosenImage: null
    };
  }
};
</script>

<style scoped>

</style>
