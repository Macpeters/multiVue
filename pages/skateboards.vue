<template>
  <div>
    <navBar />

    <h1>Hand Painted Skateboard Decks</h1>
    <h2>Custom Painted on Request</h2>

    <div class="page-description">
      All of these decks are recycled - they had their day in the sun, and were ridden to near destruction.
      I enjoy giving new life to something that might otherwise have wound up in a dump somewhere.
      If you are in Toronto, and have a bunch of old decks lying around, let me know, and I'll take them off your hands - even snapped in half.
    </div>

    <imageList/>

    <contactBar/>

  </div>
</template>

<script>
// images
import brokenRobot from "../assets/skateboards/macpeters_brokenRobot.jpg";
import drWho from "../assets/skateboards/macpeters_drWho.jpg";
import jerryBear from "../assets/skateboards/macpeters_jerryBear.jpg";
import mushroomEye from "../assets/skateboards/macpeters_mushroomEye.jpg";
import psychedelicBee from "../assets/skateboards/macpeters_psychedelicBee.jpg";
import tikiFaces from "../assets/skateboards/macpeters_tikiFaces.jpg";
import trickRTreat from "../assets/skateboards/macpeters_trickrtreat.jpg";
// components
import imageList from '../components/imageList.vue'
import navBar from '../components/navBar.vue'
import contactBar from '../components/contactBar.vue'

const base_keywords = "skateboards, skate art, skateboard art, painted decks, lowbrow, street art, recycled skateboards, sk8, skater, custom deck, psychedelic, visionary, ";

export default {
  name: "Skateboards",
  components: { imageList, navBar, contactBar },
  data() {
    return {
      images: [
        {
          image: brokenRobot,
          title: "Broken Robot",
          description: "With wires sparking, and cracked eyes, this poor robot needs some TLC",
          keywords: base_keywords + "robot, wires, tech, mech, bot, technology, broken robot, disassembled"
        },
        {
          image: drWho,
          title: "Dr Who: Exterminate",
          description: "Inspired by Dr Who: a tardis, a dalek, travel through time and space, and that question that can never be answered: Dr. Who?",
          keywords: base_keywords + "Dr Who, tardis, dalek, space travel, exterminate, time, space, time and relative dimension in space, doctor, time lords, companion, police box, blue box"
        },
        {
          image: jerryBear,
          title: "Grateful Dead Jerry Bear",
          description: "Inspired by the music and art of the Grateful Dead band and movement",
          keywords: base_keywords + "grateful dead, the dead, jerry, jerry garcia, dancing bears, jerry bears, deadhead, hippy, festival, acid, nitrous, nitrous oxide, laughing gas, tour, heads, music, dancing, uncle john's band, scarlet begonia, wings, flight, high, high on life, eyes, drips, paint, fly"
        },
        {
          image: mushroomEye,
          title: "Mushroom Eye",
          description: "Psychedelic skateboard painted at COSM during a Chris Dyer workshop",
          keywords: base_keywords + "mushroom, amanita, magic mushroom, red and white, eyeballs, many eyes, multi sight, symmetry, cosmic, energy, rainbows, fractals, sacred geometry, flower of life, mandala"
        },
        {
          image: psychedelicBee,
          title: "Psychedelic Bee",
          description: "Three eyed bee with veiny wings",
          keywords: base_keywords + "bee, three eyed, third eye, bug, insect, pollinator, flight, badass, flower, pollen, spread pollen"
        },
        {
          image: tikiFaces,
          title: "Super Friends",
          description: "An unusual group of characters",
          keywords: base_keywords + "faces, friends, super friends, unique characters, different faces, different colours, different expressions, totem, tropical, flowers"  
        },
        {
          image: trickRTreat,
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

  div {
    text-align: center
  }

</style>
