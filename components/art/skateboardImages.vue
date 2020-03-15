<template>
  <imageList/>
</template>

<script>
// images
import brokenRobot      from "../../assets/skateboards/macpeters_brokenRobot.jpg";
import drWho            from "../../assets/skateboards/macpeters_drWho.png";
import goldenRabbit     from "../../assets/skateboards/macpeters_rabbit.jpg";
import jerryBear        from "../../assets/skateboards/macpeters_jerryBear.jpg";
import mrPizza          from "../../assets/skateboards/macpeters_mrPizza.jpg";
import mushroomEye      from "../../assets/skateboards/macpeters_mushroomEye.jpg";
import psychedelicBee   from "../../assets/skateboards/macpeters_psychedelicBee.jpg";
import snake            from "../../assets/skateboards/macpeters_snake.jpg";
import tikiFaces        from "../../assets/skateboards/macpeters_tikiFaces.png";
import trickRTreat      from "../../assets/skateboards/macpeters_trickrtreat.png";
// thumbnails
import brokenRobot_thumb      from "../../assets/skateboards/thumbnails/macpeters_brokenRobot.png";
import drWho_thumb            from "../../assets/skateboards/thumbnails/macpeters_drWho.png";
import goldenRabbit_thumb     from "../../assets/skateboards/thumbnails/macpeters_rabbit.jpg";
import jerryBear_thumb        from "../../assets/skateboards/thumbnails/macpeters_jerryBear.jpg";
import mrPizza_thumb          from "../../assets/skateboards/thumbnails/macpeters_mrPizza.jpg";
import mushroomEye_thumb      from "../../assets/skateboards/thumbnails/macpeters_mushroomEye.jpg";
import psychedelicBee_thumb   from "../../assets/skateboards/thumbnails/macpeters_psychedelicBee.jpg";
import snake_thumb            from "../../assets/skateboards/thumbnails/macpeters_snake.jpg";
import tikiFaces_thumb        from "../../assets/skateboards/thumbnails/macpeters_tikiFaces.png";
import trickRTreat_thumb      from "../../assets/skateboards/thumbnails/macpeters_trickrtreat.png";

// components
import imageList    from '../../components/art/imageList.vue'

const base_keywords = "skateboards, skate art, skateboard art, painted decks, lowbrow, street art, recycled skateboards, sk8, skater, custom deck, psychedelic, visionary, ";

export default {
  name: "Skateboards",
  components: { imageList },
  data() {
    return {
      images: [
        {
          image: jerryBear,
          thumb: jerryBear_thumb,
          title: "Grateful Dead Jerry Bear",
          description: "Inspired by the music and art of the Grateful Dead band and movement",
          keywords: base_keywords + "grateful dead, the dead, jerry, jerry garcia, dancing bears, jerry bears, deadhead, hippy, festival, acid, nitrous, nitrous oxide, laughing gas, tour, heads, music, dancing, uncle john's band, scarlet begonia, wings, flight, high, high on life, eyes, drips, paint, fly"
        },
        {
          image: goldenRabbit,
          thumb: goldenRabbit_thumb,
          title: "Golden Rabbit",
          description: "Inspired by Watership Down, I wanted to show the Golden Rabbit, heralding life, as a balance to the Black Rabbit, which symoblizes death.",
          keywords: base_keywords + "rabbits, watership down, black rabbit, golden rabbit, sign of life, bunny, easter, spring"
        },
        {
          image: mushroomEye,
          thumb: mushroomEye_thumb,
          title: "Mushroom Eye",
          description: "Psychedelic skateboard painted at COSM during a Chris Dyer workshop",
          keywords: base_keywords + "mushroom, amanita, magic mushroom, red and white, eyeballs, many eyes, multi sight, symmetry, cosmic, energy, rainbows, fractals, sacred geometry, flower of life, mandala"
        },
        {
          image: psychedelicBee,
          thumb: psychedelicBee_thumb,
          title: "Psychedelic Bee",
          description: "Three eyed bee with veiny wings",
          keywords: base_keywords + "bee, three eyed, third eye, bug, insect, pollinator, flight, badass, flower, pollen, spread pollen"
        },
        {
          image: brokenRobot,
          thumb: brokenRobot_thumb,
          title: "Broken Robot",
          description: "With wires sparking, and cracked eyes, this poor robot needs some TLC",
          keywords: base_keywords + "robot, wires, tech, mech, bot, technology, broken robot, disassembled"
        },
        {
          image: drWho,
          thumb: drWho_thumb,
          title: "Dr Who: Exterminate",
          description: "Inspired by Dr Who: a tardis, a dalek, travel through time and space, and that question that can never be answered: Dr. Who?",
          keywords: base_keywords + "Dr Who, tardis, dalek, space travel, exterminate, time, space, time and relative dimension in space, doctor, time lords, companion, police box, blue box"
        },
        {
          image: mrPizza,
          thumb: mrPizza_thumb,
          title: "Mr Pizza",
          description: "Junk food is gross and bad for you",
          keywords: base_keywords + "pizza, food, gross, junk food, rotten"
        },
        {
          image: snake,
          thumb: snake_thumb,
          title: "Snake",
          description: "A snake in a tree with spider web and cherry blossom",
          keywords: base_keywords + "snake, web, cherry blossom, spiderweb, serpent"
        },
        {
          image: tikiFaces,
          thumb: tikiFaces_thumb,
          title: "Super Friends",
          description: "An unusual group of characters",
          keywords: base_keywords + "faces, friends, super friends, unique characters, different faces, different colours, different expressions, totem, tropical, flowers"
        },
        {
          image: trickRTreat,
          thumb: trickRTreat_thumb,
          title: "Sam from Trick R Treat",
          description: "Sam from the cult classic Trick R Treat movie",
          keywords: base_keywords + "trick 'r treat, sam, samhain, trick or treat, movie, candy, lollypop, halloween, blood, costume, burlap, candy corn, button eyes, spirit, kids, horror, film"
        }
      ],
      chosenImage: null
    };
  }
};
</script>

<style scoped>
  .horizontals img{
    padding-left: 10%;
    width: 80%;
  }
  .text {
    font-size: 14px;
    text-align: center;
  }
  .item {
    padding: 10px;
  }
  .keywords {
    font-size: 12px;
    color: #777;
    padding-top: 7px;
  }
  h3 {
    font-size: 16px;
    font-weight: 700;
  }

  @media screen and (max-width: 615px){
    .keywords {
      display: none;
    }
  }
</style>
