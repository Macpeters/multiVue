<template>
  <div>
    <imageList/>
  </div>
</template>

<script>
// images
import dragonfish      from "../../assets/digitalPaintings/macpeters_dragonFish.png";
import dummyBird       from "../../assets/digitalPaintings/macpeters_dummybird.png";
import featherBird     from "../../assets/digitalPaintings/macpeters_featherbird.png";
import hatchling       from "../../assets/digitalPaintings/macpeters_hatchling.png";  
import impostor        from "../../assets/digitalPaintings/macpeters_Impostor.png";  
import jellyfish       from "../../assets/digitalPaintings/macpeters_jellyFish.png";  
import surprisedTroll  from "../../assets/digitalPaintings/macpeters_surprisedTroll.png";
import draw9Lights_01  from "../../assets/digitalPaintings/macpeters_draw9Lights_01.png"; 
import draw9Lights_02  from "../../assets/digitalPaintings/macpeters_draw9Lights_02.png";  

// Thumbnails
import dragonfish_thumb     from "../../assets/digitalPaintings/thumbnails/macpeters_dragonFish.png";
import dummyBird_thumb      from "../../assets/digitalPaintings/thumbnails/macpeters_dummybird.png";
import featherBird_thumb    from "../../assets/digitalPaintings/thumbnails/macpeters_featherbird.png";
import hatchling_thumb      from "../../assets/digitalPaintings/thumbnails/macpeters_hatchling.png";  
import impostor_thumb       from "../../assets/digitalPaintings/thumbnails/macpeters_Impostor.png";  
import jellyfish_thumb      from "../../assets/digitalPaintings/thumbnails/macpeters_jellyFish.png";  
import surprisedTroll_thumb from "../../assets/digitalPaintings/thumbnails/macpeters_surprisedTroll.png";
import draw9Lights_01_thumb  from "../../assets/digitalPaintings/thumbnails/macpeters_draw9Lights_01.png"; 
import draw9Lights_02_thumb  from "../../assets/digitalPaintings/thumbnails/macpeters_draw9Lights_02.png"; 

// components
import imageList from '../../components/art/imageList.vue'

const base_keywords = "autodesk, sketchbook pro, digital painting, digital art";

export default {
  name: "DigitalPaintings",
  components: { imageList },
  data() {
    return {
      images: [
        {
          image: jellyfish,
          thumb: jellyfish_thumb,
          title: "Jellyfish",
          description: "a fuzzy jellyfish floating serenely",
          keywords: base_keywords + "underwater, fish, jellyfish, sea creature, serene, beautiful"
        },
        {
          image: dragonfish,
          thumb: dragonfish_thumb,
          title: "DragonFish",
          description: "Part dragon, part fish, this gentle underwater monster is based on a sketch from several years ago",
          keywords: base_keywords + "underwater, fish, dragon, sea creature, fantasy, monster"
        },
        {
          image: dummyBird,
          thumb: dummyBird_thumb,
          title: "Dummybird",
          description: "A lesser known relative of the dodobird, this poor creature went extinct very quickly",
          keywords: base_keywords + "bird, extinct, fantasy, made-up animal, dummy, dodo, silly"
        },
        {
          image: featherBird,
          thumb: featherBird_thumb,
          title: "Featherbird",
          description: "A magestic desert bird airing out its wings in the sunlight",
          keywords: base_keywords + "bird, feathery, desert, winged, fantasy, dragon, dinosaur"
        },
        {
          image: impostor,
          thumb: impostor_thumb,
          title: "Impostor",
          description: "Representative of 'Impostor Syndrom': the sense that you are not qualified for your role, and you're at risk of being 'found out'",
          keywords: base_keywords + "fantasy, crown, impostor syndrome, serf, peasant, king, anxiety, fear, lack of self-confidence"
        },
        {
          image: hatchling,
          thumb: hatchling_thumb,
          title: "Hatchling",
          description: "A catlizard just hatched from an egg",
          keywords: base_keywords + "cat, lizard, dinosaur, hatched, born, baby, egg, newborn, cute"
        },
        {
          image: surprisedTroll,
          thumb: surprisedTroll_thumb,
          title: "Surprised Troll",
          description: "A troll has been caught by surprise",
          keywords: base_keywords + "fantasy, troll, character, surprise, shock, experimenting with brushes"
        },
        {
          image: draw9Lights_01,
          thumb: draw9Lights_01_thumb,
          title: "Draw 9 Lights - part 1",
          description: "From my draw9 series, studying light and light effects using the airbrush in sketchbook pro",
          keywords: base_keywords + "lights, lighting, glow, reflection, coloured lights, airbrush, streetlights, candle light, christmas lights, concerts"
        },
        {
          image: draw9Lights_02,
          thumb: draw9Lights_02_thumb,
          title: "Draw 9 Lights - part 2",
          description: "From my draw9 series, studying light and light effects using the airbrush in sketchbook pro",
          keywords: base_keywords + "lights, lighting, glow, reflection, coloured lights, airbrush, streetlights, candle light, christmas lights, sunset, neon signs, metalic"
        },
      ],
      chosenImage: null
    };
  }
};
</script>

<style scoped>

</style>
