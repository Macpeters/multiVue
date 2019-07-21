<template>
  <div>
    <imageList/>
  </div>
</template>

<script>
// images
import extinct_alph_01       from "../../assets/cartoons/alphabets/macpeters_animalAlph_extinct_01.png";
import extinct_alph_02       from "../../assets/cartoons/alphabets/macpeters_animalAlph_extinct_02.png";
import extinct_alph_03       from "../../assets/cartoons/alphabets/macpeters_animalAlph_extinct_03.png";
import seaLife_alph_01       from "../../assets/cartoons/alphabets/macpeters_animalAlph_seaLife_01.png";
import seaLife_alph_02       from "../../assets/cartoons/alphabets/macpeters_animalAlph_seaLife_02.png";
import seaLife_alph_03       from "../../assets/cartoons/alphabets/macpeters_animalAlph_seaLife_03.png";

// Thumbnails
import extinct_alph_01_thumb  from "../../assets/cartoons/alphabets/thumbnails/macpeters_animalAlph_extinct_01.png";
import extinct_alph_02_thumb  from "../../assets/cartoons/alphabets/thumbnails/macpeters_animalAlph_extinct_02.png";
import extinct_alph_03_thumb  from "../../assets/cartoons/alphabets/thumbnails/macpeters_animalAlph_extinct_03.png";
import seaLife_alph_01_thumb  from "../../assets/cartoons/alphabets/thumbnails/macpeters_animalAlph_seaLife_01.png";
import seaLife_alph_02_thumb  from "../../assets/cartoons/alphabets/thumbnails/macpeters_animalAlph_seaLife_02.png";
import seaLife_alph_03_thumb  from "../../assets/cartoons/alphabets/thumbnails/macpeters_animalAlph_seaLife_03.png";


// components
import imageList from '../../components/art/imageList.vue'

const base_keywords = "cartoon, cartooning, digital art, cat, toon, kitty, ";

export default {
  name: "Cattoons",
  components: { imageList },
  data() {
    return {
      images: [
        {
          image: seaLife_alph_01,
          thumb: seaLife_alph_01_thumb,
          title: "Animal Alphabets - Sea Life Series part 1",
          description: "One sea life animal for every letter of the alphabet.  Prompts by AnimalAlphabets (twitter)",
          keywords: base_keywords + "angelfish, blue crab, clownfish, dumbo octopus, elephant seal, fang tooth, goblin shark, hourglass dolphin, immortal jellyfish"
        },
        {
          image: seaLife_alph_02,
          thumb: seaLife_alph_02_thumb,
          title: "Animal Alphabets - Sea Life Series part 2",
          description: "One sea life animal for every letter of the alphabet.  Prompts by AnimalAlphabets (twitter)",
          keywords: base_keywords + "japanese seahorse, king of herrings, lobster, mantis shrimp, napoleon snake eel, occilated waspfish, pufferfish, quillfin fish, red lipped batfish"
        },
        {
          image: seaLife_alph_03,
          thumb: seaLife_alph_03_thumb,
          title: "Animal Alphabets - Sea Life Series part 3",
          description: "One sea life animal for every letter of the alphabet.  Prompts by AnimalAlphabets (twitter)",
          keywords: base_keywords + "sheep sea slug, thornback cowfish, undulate ray, velvety sea star, weedy leaf dragon, xantic sargo, yellow tang, zebra lionfish"
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
      ],
      chosenImage: null
    };
  }
};
</script>

<style scoped>

</style>
