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

  </div>
</template>

<script>
// images
import brokenRobot from "../assets/skateboards/macpeters_brokenRobot.jpg";
import drWho from "../assets/skateboards/macpeters_drWho.jpg";
// components
import imageList from '../components/imageList.vue'
import navBar from '../components/navBar.vue'

const base_keywords = "skateboards, skate art, skateboard art, painted decks, lowbrow, street art, recycled skateboards, sk8, skater, custom deck, psychedelic, visionary, ";

export default {
  name: "Skateboards",
  components: { imageList, navBar },
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
        }
      ],
      chosenImage: null
    };
  },
  build: {
    assetsPublicPath: "/",
    assetsSubDirectory: "assets"
  }
};
</script>

<style scoped>

</style>
